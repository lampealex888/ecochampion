import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import Map from "@/app/ecolocator/Map";
import Events from "@/app/ecolocator/Events";

export default async function Component() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col min-h-screen">
      <Header text="Find E-Waste Dropoff and Recycling Facilities Near You!"/>
      <main>
        {/* Google Maps Embed */}
        <Map />
        {/* Events List */}
        <div className="p-4">
          <Events />
        </div>
      </main>
      <Footer />
    </div>
  );
}
