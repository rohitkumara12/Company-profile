import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Services from "@/components/products";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Autotech Supply menyediakan Sparepart mobil yang berkualitas untuk perawatan dan penggantian komponen kendaraan anda.",
   
  openGraph: {
    title: "AutoTech Supply | Sparepart Mobil Berkualitas",
    description:
      "Temukan berbagai kebutuhan sparepart mobil di AutoTech Supply.",
    url: "https://autotech-supply.com",
    siteName: "AutoTech Supply",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1536,
        height:864,
        alt: "AutoTech.Source - Sparepart Mobil Berkualitas",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
      <Navbar/>
        {children}
      <Services/>
        </body>
    </html>
  );
}
