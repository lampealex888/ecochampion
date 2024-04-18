"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import type { User } from "@prisma/client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

type Item = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  userId: string;
};

export default function UpdateItem({
  users,
  item,
}: {
  users: User[];
  item: Item;
}) {
  const [openDialog, setOpenDialog] = useState(false);
  const { toast } = useToast();

  const FormSchema = z.object({
    title: z.string().min(2, {
      message: "Item name must be at least 2 characters.",
    }),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    user: z.string(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: item.title,
      description: item.description,
      category: item.category,
      image: item.image,
      user: item.userId,
    },
  });

  const router = useRouter();

  const handleSubmit = async (values: z.infer<typeof FormSchema>) => {
    const data = JSON.stringify({
      title: values.title,
      description: values.description,
      category: values.category,
      image: values.image,
      userId: values.user,
    });

    try {
      const req = await axios.patch(`/api/items/${item.id}`, data);

      toast({
        title: "Successfully!",
        description: "Item updated successfully",
      });

      form.reset({
        title: "",
        description: "",
        category: "",
        image: "",
        user: "",
      });
      setOpenDialog((prevState) => !prevState);

      router.refresh();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <Button size="sm" className="bg-yellow-500 text-black" variant="outline">Edit</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit Item</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              className="grid gap-4 md:grid-cols-2"
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select
                        required
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="clothing">Clothing</SelectItem>
                          <SelectItem value="electronics">
                            Electronics
                          </SelectItem>
                          <SelectItem value="furniture">Furniture</SelectItem>
                          <SelectItem value="books">Books</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input placeholder="Description" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <Input placeholder="Image URL" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="user"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a user" />
                        </SelectTrigger>
                        <SelectContent>
                          {users.map((user, index) => (
                            <SelectItem key={index} value={`${user.id}`}>
                              {user.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <Button
                type="submit"
                className="flex flex-col gap-2 md:col-start-2"
              >
                Post item
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
