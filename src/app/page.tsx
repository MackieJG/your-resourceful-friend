"use client";

import { Button } from "@/components/ui/button";
import { supabase } from "@/supabase";
import { useEffect } from "react";

export default function Home() {
  const getAllCategories = async () => {
    let { data: Category, error } = await supabase.from("Category").select("*");
    if (error) {
      return error;
    }
    console.log(Category);
    return Category;
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      <h1 className="underline text-red-600">Hello World</h1>
      <Button>Button</Button>
    </>
  );
}
