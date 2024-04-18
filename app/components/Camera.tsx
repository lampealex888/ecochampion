"use client";
import { useRef, useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useModel } from "@/app/utils/ModelContext";
import React from "react";

type UploadedImage = {
  name: string;
  url: string;
  predictions: ClassPrediction[];
};
type ClassPrediction = {
  className: string;
  probability: number | string;
};
type PredictionResult = {
  predictionData: ClassPrediction[];
};

const videoConstraints = {
  width: 1080,
  height: 720,
  facingMode: "user",
};

// formats the label to be more human readable
function formatLabel(label: string) {
  if (!label) return "";

  const words = label.split("-");
  const formattedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return formattedWords.join(" ");
}

export default function Camera() {
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [classPrediction, setClassPrediction] = useState<string | null>(null);
  const { model } = useModel();

  // Predict the image classification using the model
  const predictImage = async (imageUrl: string | null) => {
    if (!model) return Promise.reject("Model not loaded");

    const img = document.createElement("img");
    img.src = imageUrl || "";
    img.crossOrigin = "Anonymous";
    await img.decode();

    const predictions = await model.predict(img);
    const maxFloatValue = Math.max(...predictions.map((p) => p.probability));
    const predictionData: ClassPrediction[] = predictions.map((p) => ({
      className: p.className,
      probability: p.probability === maxFloatValue ? p.probability : 0,
    }));

    return { predictionData };
  };

  // Capture the image from the webcam
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setCaptureEnable(false);
    if (imageSrc) {
      setImageUrl(imageSrc);
      predictImage(imageSrc)
        .then((result: unknown) => {
          const { predictionData } = result as PredictionResult;
          // Handle predictions and maxFloatValue
          console.log(predictionData);
          predictionData.sort((a, b) => {
            return Number(b.probability) - Number(a.probability);
          });
          const maxPrediction = predictionData[0].className;
          setClassPrediction(maxPrediction || "");
        })
        .catch((error) => {
          // Handle error
          console.error(error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webcamRef]);

  // Retaking image logic
  const retake = useCallback(() => {
    setImageUrl(null);
    setCaptureEnable(true);
  }, []);

  return (
    <div className="grid gap-4 text-center">
      {!isCaptureEnable && !imageUrl && (
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            alt="Live camera feed"
            className="object-cover h-[720px] w-[1080px]"
            height="360"
            src="/placeholder.svg"
            width="720"
          />
          <div className="absolute inset-0 flex items-center justify-center gap-4">
            <Button size="lg" onClick={() => setCaptureEnable(true)}>
              Start Camera
            </Button>
          </div>
        </div>
      )}
      {isCaptureEnable && (
        <>
          <div className="relative w-full aspect-video overflow-hidden rounded-lg">
            <Webcam
              audio={false}
              width={1080}
              height={720}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              className="object-cover h-full w-full"
            />
          </div>
          <Button size="lg" onClick={capture}>
            Capture
          </Button>
          <Button size="lg" onClick={() => setCaptureEnable(false)}>
            End Camera
          </Button>
        </>
      )}
      {imageUrl && (
        <>
          <div className="relative w-full aspect-video overflow-hidden rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageUrl} alt="Screenshot" />
          </div>
          <p className="flex text-7xl font-bold justify-center">
            {formatLabel(classPrediction || "")}
          </p>
          <Button size="lg" onClick={retake}>
            Retake
          </Button>
          <Button size="lg" onClick={() => setImageUrl(null)}>
            Delete
          </Button>
        </>
      )}
    </div>
  );
}
