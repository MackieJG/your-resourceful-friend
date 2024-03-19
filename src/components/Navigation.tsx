import { ModeToggle } from "@/components/ModeToggle";
import { buttonVariants } from "./ui/button";
import MobileNavigation from "@/components/MobileNavigation";
import Logo from "./Logo";

export const googleFormLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSdG3EZWq1jFut0jkrsugBLZrDD8p5yxBdeqpiusLCQCBiJCjw/viewform";
  
export default function NavBar({ categories }: any) {
  return (
    <header className="flex py-4 items-center gap-8 justify-between">
      <Logo />
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
    </header>
  );
}
