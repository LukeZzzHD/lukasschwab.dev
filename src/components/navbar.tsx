import { Github, Linkedin, Mail } from "lucide-react";
import * as React from "react";

export function NavBar() {
  return (
    <div className="fixed top-0 z-50 flex w-full animate-fadein500 justify-center opacity-0">
      <nav className="container flex min-h-12 flex-row items-start justify-between border border-none px-4 py-4 font-thin sm:min-h-16 sm:px-6 sm:py-6 md:items-center md:px-8 md:py-8 lg:py-10">
        <span className="text-xl font-extrabold uppercase text-white sm:text-2xl md:text-3xl">
          Lukas Schwab.
        </span>
        <div className="flex flex-row text-lg sm:text-xl">
          <a
            className="px-1 text-white hover:opacity-50 md:px-3"
            href="https://github.com/LukeZzzHD"
          >
            <Github className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a
            className="px-1 text-white hover:opacity-50 md:px-3"
            href="https://www.linkedin.com/in/lukas-schwab-a81bbb259/"
          >
            <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a
            className="px-1 text-white hover:opacity-50 md:px-3"
            href="mailto:lukezzzhd@gmail.com"
          >
            <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </div>
      </nav>
    </div>
  );
}
