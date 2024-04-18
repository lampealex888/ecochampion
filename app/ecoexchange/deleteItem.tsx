"use client";

import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import axios from "axios";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

type Item = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  userId: string;
};

export default function DeleteItem({ item }: { item: Item }) {
  const { toast } = useToast();
  const router = useRouter();

  const deleteItem = async (id: number) => {
    try {
      const res = await axios.delete(`/api/items/${id}`);

      toast({
        title: "Successfully!",
        description: "Item deleted successfully",
      });

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
    <Button
      size="sm"
      className="bg-red-500 text-white"
      onClick={() => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            await deleteItem(item.id);
          }
        });
      }}
    >
      Delete
    </Button>
  );
}
