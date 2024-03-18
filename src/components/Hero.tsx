import { Zen_Dots } from "next/font/google";

export const zen_dots = Zen_Dots({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section className="text-center space-y-2 py-12">
      <h1 className={zen_dots.className + " text-2xl font-semibold"}>
        Junior Dev Resources
      </h1>
      <h2 className="text-lg text-muted-foreground">
        A set of useful resources for junior developers to explore.
      </h2>
    </section>
  );
}
