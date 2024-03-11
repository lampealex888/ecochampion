"use client";

import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const videoConstraints = {
  width: 720,
  height: 360,
  facingMode: "user",
};

export default function Camera() {
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);

  return (
    <>
      {isCaptureEnable || (
        <div className="relative w-full aspect-video overflow-hidden rounded-lg">
          <img
            alt="Live camera feed"
            className="object-cover object-center h-full w-full"
            height="600"
            src="/placeholder.svg"
            style={{
              aspectRatio: "600/600",
              objectFit: "cover",
            }}
            width="600"
          />
          <div className="absolute inset-0 flex items-center justify-center gap-4">
            <Button size="lg" onClick={() => setCaptureEnable(true)}>Start Camera</Button>
          </div>
        </div>
      )}
      {isCaptureEnable && (
        <>
          <div>
            <button onClick={() => setCaptureEnable(false)}>end </button>
          </div>
          <div>
            <Webcam
              audio={false}
              width={540}
              height={360}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
          <button onClick={capture}>capture</button>
        </>
      )}
      {url && (
        <>
          <div>
            <button
              onClick={() => {
                setUrl(null);
              }}
            >
              delete
            </button>
          </div>
          <div>
            <img src={url} alt="Screenshot" />
          </div>
        </>
      )}
    </>
  );
}
