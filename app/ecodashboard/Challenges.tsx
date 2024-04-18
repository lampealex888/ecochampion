"use client";
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import { Progress } from "@/components/ui/progress";

function getStoredData() {
  if (typeof window !== "undefined") {
    const storedData = window.localStorage.getItem("challengeData");
    return storedData
      ? JSON.parse(storedData)
      : { xp: 0, completedChallenges: [] };
  }
  return { xp: 0, completedChallenges: [] };
}

const challenges = [
  {
    id: "energyEfficient",
    title: "Energy-Efficient Lighting",
    description:
      "Replace traditional incandescent light bulbs with energy-efficient LED bulbs in your home.",
    icon: LightBulbIcon,
  },
  {
    id: "reusableBags",
    title: "Switch to Reusable Bags",
    description:
      "Commit to using reusable bags for all your shopping needs instead of single-use plastic bags.",
    icon: ShoppingBagIcon,
  },
  {
    id: "meatlessMondays",
    title: "Meatless Mondays",
    description:
      "Dedicate every Monday to eating plant-based meals, excluding meat from your diet.",
    icon: AppleIcon,
  },
  {
    id: "recycling",
    title: "Recycling",
    description:
      "Properly separate and recycle paper, plastic, glass, and metal waste in your home.",
    icon: RecyclingIcon,
  },
  {
    id: "waterConservation",
    title: "Water Conservation",
    description:
      "Implement water-saving practices like taking shorter showers and fixing leaks.",
    icon: WaterDropIcon,
  },
];

export default function Challenges() {
  const [xp, setXp] = useState(getStoredData().xp);
  const [maxXp, setMaxXp] = useState(100);
  const [completedChallenges, setCompletedChallenges] = useState(
    getStoredData().completedChallenges
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        "challengeData",
        JSON.stringify({ xp, completedChallenges })
      );
    }
  }, [xp, completedChallenges]);

  const handleChallengeComplete = (challengeId: string) => {
    setXp((prevXp: number) => Math.min(prevXp + 20, maxXp));
    setCompletedChallenges((prevCompletedChallenges: any) => [
      ...prevCompletedChallenges,
      challengeId,
    ]);
  };

  const resetProgress = () => {
    setXp(0);
    setCompletedChallenges([]);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("challengeData");
    }
  };

  const availableChallenges = challenges.filter(
    (challenge) => !completedChallenges.includes(challenge.id)
  );

  return (
    <>
      <section className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Progression</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Track your progress and get net zero!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Progress value={xp} className="mb-4" />
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {xp === maxXp ? "100" : Math.min((xp / maxXp) * 100, 100)}% Complete
          </p>
        </div>
      </section>
      {availableChallenges.length > 0 ? (
        <section className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Challenges</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Complete these challenges to level up your fitness!
              </p>
            </div>
          </div>
          {availableChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              <div className="flex flex-row gap-4">
                <challenge.icon className="w-10 h-10 fill-current" />
                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold">{challenge.title}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {challenge.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-4 md:gap-0">
                <Button
                  size="sm"
                  onClick={() => handleChallengeComplete(challenge.id)}
                >
                  Complete Challenge
                </Button>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <div className="flex flex-col items-center gap-4 mt-8">
          <h2 className="text-xl font-semibold">
            Congratulations! You've completed all challenges!
          </h2>
          <Button size="sm" onClick={resetProgress}>
            Reset Progress
          </Button>
        </div>
      )}
    </>
  );
}

function LightBulbIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" />
    </svg>
  );
}

function ShoppingBagIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </svg>
  );
}

function AppleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M224 112c-8.8 0-16-7.2-16-16V80c0-44.2 35.8-80 80-80h16c8.8 0 16 7.2 16 16V32c0 44.2-35.8 80-80 80H224zM0 288c0-76.3 35.7-160 112-160c27.3 0 59.7 10.3 82.7 19.3c18.8 7.3 39.9 7.3 58.7 0c22.9-8.9 55.4-19.3 82.7-19.3c76.3 0 112 83.7 112 160c0 128-80 224-160 224c-16.5 0-38.1-6.6-51.5-11.3c-8.1-2.8-16.9-2.8-25 0c-13.4 4.7-35 11.3-51.5 11.3C80 512 0 416 0 288z" />
    </svg>
  );
}

function RecyclingIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M174.7 45.1C192.2 17 223 0 256 0s63.8 17 81.3 45.1l38.6 61.7 27-15.6c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3l-23.4 87.4c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l28.4-16.4L283 79c-5.8-9.3-16-15-27-15s-21.2 5.7-27 15l-17.5 28c-9.2 14.8-28.6 19.5-43.6 10.5c-15.3-9.2-20.2-29.2-10.7-44.4l17.5-28zM429.5 251.9c15-9 34.4-4.3 43.6 10.5l24.4 39.1c9.4 15.1 14.4 32.4 14.6 50.2c.3 53.1-42.7 96.4-95.8 96.4L320 448v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2v32l96.2 0c17.6 0 31.9-14.4 31.8-32c0-5.9-1.7-11.7-4.8-16.7l-24.4-39.1c-9.5-15.2-4.7-35.2 10.7-44.4zm-364.6-31L36 204.2c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20l87.4-23.4c12.8-3.4 26 4.2 29.4 17L182 241.2c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-26.5-15.3L68.8 335.3c-3.1 5-4.8 10.8-4.8 16.7c-.1 17.6 14.2 32 31.8 32l32.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32.2 0C42.7 448-.3 404.8 0 351.6c.1-17.8 5.1-35.1 14.6-50.2l50.3-80.5z" />
    </svg>
  );
}

function WaterDropIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z" />
    </svg>
  );
}
