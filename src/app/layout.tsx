import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import { Lato } from "next/font/google";
import NavBar from "../components/nav/navBar";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Distribute Aid",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <NavBar />
        <div className="pt-20">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
