"use client";

import { useEffect, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { Database, Tables } from "../../types/supabase";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarProps = {
  categories: Category[];
};

export type Category = {
  id: number;
  title: string;
  slug: string;
};

export default function Sidebar({ categories }: SidebarProps) {
  const pathname = usePathname();
  return (
    <aside className="hidden sm:block p-4 rounded-md bg-secondary min-w-[240px]">
      <ul className="space-y-2">
        {categories ? (
          categories.map((category: Category, index: number) => {
            return (
              <li key={index} className="flex">
                <Link
                  className={
                    buttonVariants({
                      variant:
                        pathname === "/" + category.slug ? "default" : "ghost",
                    }) + " flex-1"
                  }
                  href={`/${category.slug}`}>
                  {category.title}
                </Link>
              </li>
            );
          })
        ) : (
          <li key="loading...">Loading...</li>
        )}
      </ul>
    </aside>
  );
}
