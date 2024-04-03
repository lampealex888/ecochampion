/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <section className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Challenges</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Complete these challenges to level up your fitness!
              </p>
            </div>
            <div className="flex items-center justify-end gap-4 md:gap-0">
              <Button size="sm">Start New Challenge</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold">Running Challenge</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Run 5 miles every day for a week.
              </p>
            </div>
            <div className="flex items-center justify-end gap-4 md:gap-0">
              <ActivityIcon className="w-10 h-10" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold">Push-up Challenge</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Do 100 push-ups in 30 days.
              </p>
            </div>
            <div className="flex items-center justify-end gap-4 md:gap-0">
              <DumbbellIcon className="w-10 h-10" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold">Yoga Challenge</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Practice yoga for 15 minutes every day.
              </p>
            </div>
            <div className="flex items-center justify-end gap-4 md:gap-0">
              <ActivityIcon className="w-10 h-10" />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Tips</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Check out these tips to improve your workouts!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold">Tip 1: Hydration</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Drink plenty of water before, during, and after your workouts to
                stay hydrated.
              </p>
            </div>
            <div className="flex items-center justify-end gap-4 md:gap-0">
              <GlassWaterIcon className="w-10 h-10" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold">Tip 2: Stretching</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Always warm up with dynamic stretches and cool down with static
                stretches to prevent injury.
              </p>
            </div>
            <div className="flex items-center justify-end gap-4 md:gap-0">
              <StretchVerticalIcon className="w-10 h-10" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold">Tip 3: Rest</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Make sure to get enough rest between workouts to allow your
                muscles to recover and grow.
              </p>
            </div>
            <div className="flex items-center justify-end gap-4 md:gap-0">
              <ListRestartIcon className="w-10 h-10" />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Progression</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Track your progress and level up your fitness!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold">Running Challenge</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                You've completed 2 out of 5 days. Keep up the good work!
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <progress
                className="w-full h-2 rounded-lg"
                max="100"
                value="40"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                40% Complete
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold">Push-up Challenge</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                You've completed 10 push-ups. Only 90 to go!
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <progress
                className="w-full h-2 rounded-lg"
                max="100"
                value="10"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                10% Complete
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold">Yoga Challenge</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                You've completed 5 days of yoga. Keep calm and carry on!
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <progress
                className="w-full h-2 rounded-lg"
                max="100"
                value="50"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                50% Complete
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold">Overall Progress</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                You've completed 3 challenges and earned the title of Fitness
                Warrior!
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ActivityIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function DumbbellIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6.5 6.5 11 11" />
      <path d="m21 21-1-1" />
      <path d="m3 3 1 1" />
      <path d="m18 22 4-4" />
      <path d="m2 6 4-4" />
      <path d="m3 10 7-7" />
      <path d="m14 21 7-7" />
    </svg>
  );
}

function GlassWaterIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" />
      <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
    </svg>
  );
}

function ListRestartIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 6H3" />
      <path d="M7 12H3" />
      <path d="M7 18H3" />
      <path d="M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14" />
      <path d="M11 10v4h4" />
    </svg>
  );
}

function Package2Icon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function StretchVerticalIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="6" height="20" x="4" y="2" rx="2" />
      <rect width="6" height="20" x="14" y="2" rx="2" />
    </svg>
  );
}
