/* eslint-disable react/no-unescaped-entities */
import { JSX, SVGProps } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function EcoExchange() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header text="Exchange Freebies With Others"/>
      <main className="flex-1">
        <section className="container flex flex-col gap-4 p-4 mx-auto md:gap-8 md:p-6">
          <div className="grid gap-4">
            <p className="text-gray-500 dark:text-gray-400">
              A platform for exchanging freebies. Post items you no longer need
              and give them away to others who might find them useful.
            </p>
          </div>
          <Card className="p-4 md:p-8">
            <CardTitle>Post an item</CardTitle>
            <CardDescription>
              Share the love! Post an item you want to give away.
            </CardDescription>
            <CardContent>
              <form className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label className="text-sm" htmlFor="title">
                    Title
                  </Label>
                  <Input id="title" required />
                </div>
                <div className="grid gap-2">
                  <Label className="text-sm" htmlFor="category">
                    Category
                  </Label>
                  {/* removed prop ```id="category"``` from Select element because errors */}
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="furniture">Furniture</SelectItem>
                      <SelectItem value="books">Books</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label className="text-sm" htmlFor="description">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Enter a description"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label className="text-sm" htmlFor="images">
                    Images
                  </Label>
                  <Input id="images" multiple type="file" />
                  <div className="grid gap-2 text-xs">
                    <p className="text-gray-500 dark:text-gray-400">
                      Drag and drop your images here
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      or click to browse
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:col-start-2">
                  <Button type="submit">Post item</Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <h2 className="text-2xl font-semibold">Latest items</h2>
            </div>
            <div className="grid gap-2">
              <Input placeholder="Search items..." type="search" />
            </div>
          </div>
          <div className="grid gap-4 md:gap-8">
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Thumbnail"
                      className="aspect-square rounded-md object-cover"
                      height="80"
                      src="/placeholder.svg"
                      width="80"
                    />
                    <div className="grid gap-2">
                      <h3 className="font-semibold">Vintage Armchair</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Posted by
                        <span className="font-medium">Alice Johnson</span>| 2
                        hours ago
                      </p>
                    </div>
                  </div>
                  <p className="line-clamp-3">
                    Beautiful vintage armchair in excellent condition. Floral
                    pattern with wooden legs. Perfect for adding a touch of
                    retro charm to your home. Must be able to pick up from the
                    city center.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm">Contact</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Thumbnail"
                      className="aspect-square rounded-md object-cover"
                      height="80"
                      src="/placeholder.svg"
                      width="80"
                    />
                    <div className="grid gap-2">
                      <h3 className="font-semibold">Children's Books</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Posted by
                        <span className="font-medium">Emily Parker</span>| 1 day
                        ago
                      </p>
                    </div>
                  </div>
                  <p className="line-clamp-3">
                    Collection of children's books in good condition. Includes
                    classic fairy tales, adventure stories, and educational
                    books. Perfect for young readers or for bedtime stories.
                    Must be able to pick up from the suburbs.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm">Contact</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Thumbnail"
                      className="aspect-square rounded-md object-cover"
                      height="80"
                      src="/placeholder.svg"
                      width="80"
                    />
                    <div className="grid gap-2">
                      <h3 className="font-semibold">Sofa Bed</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Posted by
                        <span className="font-medium">David Smith</span>| 3 days
                        ago
                      </p>
                    </div>
                  </div>
                  <p className="line-clamp-3">
                    Comfortable sofa that can be converted into a bed. Perfect
                    for hosting guests or for small spaces. In good condition,
                    just a few years old. Must be able to pick up from the
                    suburbs.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm">Contact</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Thumbnail"
                      className="aspect-square rounded-md object-cover"
                      height="80"
                      src="/placeholder.svg"
                      width="80"
                    />
                    <div className="grid gap-2">
                      <h3 className="font-semibold">Vintage Vinyl Records</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Posted by
                        <span className="font-medium">Sophie Brown</span>| 5
                        days ago
                      </p>
                    </div>
                  </div>
                  <p className="line-clamp-3">
                    Collection of vintage vinyl records, including classic rock,
                    jazz, and pop hits. Perfect for music enthusiasts who
                    appreciate the warm sound of analog. Must be able to pick up
                    from the city center.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm">Contact</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function GiftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect width="20" height="5" x="2" y="7" />
      <line x1="12" x2="12" y1="22" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

function LogOutIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

function SettingsIcon(
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
