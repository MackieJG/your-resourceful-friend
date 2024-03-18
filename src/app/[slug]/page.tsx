"use client";

import { Button } from "@/components/ui/button";
import { supabase } from "@/supabase";
import { useEffect } from "react";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <h1 className="underline text-red-600">{params.slug}</h1>
      <Button>Button</Button>
    </>
  );
}
