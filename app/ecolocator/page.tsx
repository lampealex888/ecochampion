import { Button } from "@/components/ui/button";
import { SVGProps } from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import LogoutButton from "@/app/components/LogoutButton";
//import axios from "axios";
//import { useEffect, useState } from "react";

export default async function Component() {
  const session = await getServerSession(authOptions);

  //const [facilities, setFacilities] = useState([]);

  // useEffect(() => {
  //   const fetchFacilities = async () => {
  //     const response = await axios.get(
  //       "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
  //       {
  //         params: {
  //           location: "your-location",
  //           radius: "10000",
  //           type: "recycling_facility",
  //           key: "process.env.MAPS_API_KEY",
  //         },
  //       }
  //     );

  //     const facilities = response.data.results.map((place) => ({
  //       name: place.name,
  //       address: place.vicinity,
  //     }));

  //     setFacilities(facilities);
  //   };

  //   fetchFacilities();
  // }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-14 px-4 border-b lg:h-16 bg-gray-100/40 dark:bg-gray-800/40">
        <Link href="/">
          <Button className="mr-4 -top-1" size="icon" variant="ghost">
            <ChevronLeftIcon className="h-6 w-6" />
            <span className="sr-only">Go back</span>
          </Button>
        </Link>
        <h1 className="text-lg font-semibold">
          Find E-Waste and Recycling Facilities Near You!
        </h1>
        {session ? (
          <div className="ml-auto">
            <LogoutButton />
          </div>
        ) : (
          <Button asChild className="ml-auto">
            <Link href="/auth">Login</Link>
          </Button>
        )}
      </header>
      <main className="flex-1 flex p-4">
        {/* Google Maps Embed */}
        <div className="flex-1 mr-4">
          <iframe
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            src={
              "https://www.google.com/maps/embed/v1/place?key=" +
              process.env.MAPS_API_KEY +
              "&q=Recycling+Facilities"
            }
          ></iframe>
        </div>
        {/* Facilities List */}

        {/* <div className="w-1/3">
          <h2 className="text-lg font-semibold mb-2">Facilities Nearby:</h2>
          <ul>
            {facilities.map((facility, index) => (
              <li key={index} className="mb-2">
                <p className="font-semibold">{facility.name}</p>
                <p>{facility.address}</p>
              </li>
            ))}
          </ul>
        </div> */}
      </main>
      <Footer />
    </div>
  );
}

function ChevronLeftIcon(
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}
