import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function HomePage() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col justify-center px-4 py-8 pt-20 text-white sm:px-6 sm:pt-24 md:px-8 md:pt-28 lg:px-16 lg:pt-32">
      <div className="max-w-4xl space-y-4 sm:space-y-6">
        <h1 className="animate-slidein300 text-3xl font-extrabold leading-tight opacity-0 sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
          I&apos;m Lukas
        </h1>

        <p className="max-w-2xl animate-slidein500 text-base font-light opacity-0 sm:text-lg md:text-xl lg:text-2xl">
          Full-stack developer based in Bern, Switzerland.{" "}
          <span>
            I love crafting digital solutions that solve real-world problems.{" "}
          </span>
          <span>
            Building things isn&apos;t just my job — it&apos;s my passion.
          </span>
        </p>

        <div className="animate-slidein700 pt-4 opacity-0 sm:pt-6">
          <Button
            disabled
            variant="outline"
            size="lg"
            className="group flex items-center gap-2 text-sm text-primary sm:text-base"
          >
            Download CV
            <Download className="h-4 w-4 transition-transform group-hover:animate-bounce sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
