import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import Camera from "./Camera";

export default async function Component() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col min-h-screen">
      <Header text="Capture and Classify Recyclable Materials"/>
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <h3 style={{textAlign:"center", marginBottom:"25px"}}> Use the Material Classifier below to help you decide the recycling category of anything with the power of machine learning!</h3>
        <Camera />
      </main>
      {/* <div className="grid w-full gap-4 p-4">
        <div className="grid gap-1">
          <h2 className="text-lg font-semibold">Classification Result</h2>
          <p className="text-sm">
            The captured item has been classified as{" "}
            <span className="font-semibold">Organic Waste</span>.
            {"\n                  "}
          </p>
        </div>
        <div className="grid gap-1">
          <h2 className="text-lg font-semibold">History</h2>
          <div className="flex items-center gap-4">
            <Image
              alt="Captured image"
              className="aspect-square rounded-md object-cover"
              height="64"
              src="/placeholder.svg"
              width="64"
            />
            <Button className="ml-auto" size="sm">
              Recyclable
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Image
              alt="Captured image"
              className="aspect-square rounded-md object-cover"
              height="64"
              src="/placeholder.svg"
              width="64"
            />
            <Button className="ml-auto" size="sm">
              Trash
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Image
              alt="Captured image"
              className="aspect-square rounded-md object-cover"
              height="64"
              src="/placeholder.svg"
              width="64"
            />
            <Button className="ml-auto" size="sm">
              Organic
            </Button>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}