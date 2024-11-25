import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function HomePage() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col justify-center px-6 py-16 text-white md:px-8 lg:px-16">
      <div className="max-w-4xl space-y-6">
        <h1 className="animate-slidein300 text-4xl font-extrabold leading-tight opacity-0 md:text-6xl lg:text-8xl">
          I&apos;m Lukas
        </h1>

        <p className="animate-slidein500 max-w-2xl text-lg font-light opacity-0 md:text-xl lg:text-2xl">
          Full-stack developer based in Bern, Switzerland.{" "}
          <br className="hidden md:block" />I love crafting digital solutions
          that solve real-world problems.{""}
          <br className="hidden md:block" />
          Building things isn&apos;t just my job — it&apos;s my passion.
        </p>

        <div className="animate-slidein700 pt-6 opacity-0">
          <Button
            disabled
            variant="outline"
            size="lg"
            className="text-primary group flex items-center gap-2"
          >
            Download CV
            <Download className="h-5 w-5 transition-transform group-hover:animate-bounce" />
          </Button>
        </div>
      </div>
    </div>
  );
}
