import { ModeToggle } from "@/components/ModeToggle";
import { buttonVariants } from "./ui/button";
import MobileNavigation from "@/components/MobileNavigation";
import Logo from "./Logo";
import Link from "next/link";
import { supabase } from "@/supabase";
import { useEffect, useState } from "react";
import Image from "next/image";

import LogoLight from "../assets/logo-light.svg";
import LogoDark from "../assets/logo-dark.svg";
import { useTheme } from "next-themes";

export const googleFormLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSdG3EZWq1jFut0jkrsugBLZrDD8p5yxBdeqpiusLCQCBiJCjw/viewform?usp=sf_link";

export default function NavBar() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
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
    setMounted(true);
    getAllCategories();
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="flex py-4 items-center gap-8 justify-between">
      <div className="flex items-center gap-8">
        <Link href="/" className="max-w-sm">
          <Image
            src={resolvedTheme === "dark" ? LogoDark : LogoLight}
            alt="JuniorDevResources Logo"
          />
        </Link>
        <Link
          href="project-generator"
          className={
            buttonVariants({ variant: "ghost" }) + " hidden sm:inline-flex"
          }>
          Project Generator
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <a
          href={googleFormLink}
          target="_blank"
          className={
            buttonVariants({ variant: "default" }) + " hidden sm:inline-flex"
          }>
          Add Resource
        </a>
        <div className="sm:hidden">
          <MobileNavigation categories={categories} />
        </div>
      </div>
    </nav>
  );
}
