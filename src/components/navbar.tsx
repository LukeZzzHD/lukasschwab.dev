import { Github, Linkedin, Mail } from "lucide-react";
import * as React from "react";

export function NavBar() {
  return (
    <div className="animate-fadein500 fixed top-0 z-50 flex w-full justify-center opacity-0">
      <nav className="container flex min-h-16 flex-row items-start justify-between border border-none px-6 py-8 font-thin md:flex-row md:items-center md:justify-between md:px-0 md:py-20">
        <span className="text-2xl font-extrabold uppercase text-white md:p-0 md:text-3xl">
          Lukas Schwab.
        </span>
        <div className="flex flex-row text-xl">
          <a
            className="px-1 text-white hover:opacity-50 md:px-3"
            href="https://github.com/LukeZzzHD"
          >
            <Github />
          </a>
          <a
            className="px-1 text-white hover:opacity-50 md:px-3"
            href="https://www.linkedin.com/in/lukas-schwab-a81bbb259/"
          >
            <Linkedin />
          </a>
          <a
            className="px-1 text-white hover:opacity-50 md:px-3"
            href="mailto:lukezzzhd@gmail.com"
          >
            <Mail />
          </a>
        </div>
      </nav>
    </div>
  );
}
