"use client"

import Hero from "@/components/Hero";
import { supabase } from "@/supabase";
import Sidebar from "@/components/Sidebar";
import { useState, useEffect } from "react";

// export const metadata = {
//   title: "Junior Dev Resources",
// };
export default function ClientLayout({ children }: any) {

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

  return (
    <div>
      <Hero />
      <section className="flex gap-4">
        <Sidebar categories={categories} />
        <div className="flex-1">{children}</div>
      </section>
    </div>
  );
}
