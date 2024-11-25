import { NavBar } from "@/components/navbar";
import "@/styles/globals.css";
import { type Metadata } from "next";
import { Rubik } from "next/font/google";

export const metadata: Metadata = {
  title: "Lukas Schwab - Portfolio",
  description: "Welcome to my portfolio!",
  icons: {
    icon: [
      { url: "/favicon-96x96.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-touch-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-touch-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-touch-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-touch-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-touch-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-touch-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-touch-icon-180x180.png", sizes: "180x180" },
    ],
  },
};

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${rubik.className}`}>
      <body className="min-h-screen bg-zinc-900">
        <NavBar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
