"use client";

import { Button } from "@/components/ui/button";
import { supabase } from "@/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [categories, setCategories] = useState<any>();

  const getAllCategories = async () => {
    let { data: Categories, error }: any = await supabase
      .from("Categories")
      .select("*");
    if (error) {
      setCategories(undefined);
    }
    setCategories(Categories);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    if (categories) {
      router.push(categories[0].slug);
    }
  }, [categories]);

  return (
    <>
      <h1>Loading...</h1>
    </>
  );
}
