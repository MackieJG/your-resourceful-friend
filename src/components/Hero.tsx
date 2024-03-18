import { JetBrains_Mono } from "next/font/google";

export const jetBrains_mono = JetBrains_Mono({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section className="text-center space-y-2 py-12">
      <h1
        className={
          jetBrains_mono.className + " text-2xl font-semibold md:text-4xl"
        }>
        Junior Dev Resources
      </h1>
      <h2 className="text-lg text-muted-foreground">
        A set of useful resources for junior developers to explore.
      </h2>
    </section>
  );
}
