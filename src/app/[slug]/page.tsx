"use client";

import { ResourceCard } from "@/components/ResourceCard";
import { Button } from "@/components/ui/button";
import { supabase } from "@/supabase";
import { useEffect, useState } from "react";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const [resources, setResources] = useState([]);

  async function getResources(CategoryId: number) {
    let { data: Resources, error } = await supabase
      .from("Resources")
      .select("*, Resources_Categories!inner(category_id)")
      .eq("Resources_Categories.category_id", CategoryId);

    if (error) {
      console.error(error);
    }
    setResources(Resources);
  }

  const getCategoryId = async () => {
    let { data: Category, error } = await supabase
      .from("Categories")
      .select("id")
      .eq("slug", params.slug);

    if (error) {
      console.error(error);
    }
    getResources(Category[0].id);
  };

  useEffect(() => {
    getCategoryId();
  }, []);

  return (
    <ul className="flex justify-center sm:justify-start flex-wrap gap-4">
      {resources ? (
        resources.map((resource, index) => {
          return (
            <li key={index}>
              <ResourceCard resource={resource} />
            </li>
          );
        })
      ) : (
        <p>error</p>
      )}
    </ul>
  );
}
