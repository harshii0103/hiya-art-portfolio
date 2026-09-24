import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArchDefs from "@/components/ArchDefs";
import BrushstrokeLoader from "../components/BrushstrokeLoader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata: Metadata = {
  title: "Hiya | Art Portfolio",
  description: "Art, murals & commissions by Hiya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} font-sans antialiased bg-white text-neutral-900`}>
        <ArchDefs />
        <Navigation />
        <BrushstrokeLoader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
