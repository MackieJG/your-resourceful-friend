import { Button, buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { googleFormLink } from "./Navigation";

export default function MobileDrawer({ categories }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleButton = (link: string) => {
    console.log(link);
    setIsOpen(false);
    router.push(link);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full px-4 max-w-sm">
          <div className="flex flex-1 items-center">
            <ul className="flex flex-1 flex-col gap-2 py-6">
              {categories &&
                categories.map((value, index) => {
                  return (
                    <li key={index} className="flex flex-1">
                      <Button
                        variant={
                          pathname === "/" + value.slug ? "default" : "outline"
                        }
                        className="flex-1"
                        onClick={() => handleButton(value.slug)}>
                        {value.title}
                      </Button>
                    </li>
                  );
                })}
              <a
                href={googleFormLink}
                target="_blank"
                className={buttonVariants({ variant: "secondary" })}>
                Add Resource
              </a>
            </ul>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
