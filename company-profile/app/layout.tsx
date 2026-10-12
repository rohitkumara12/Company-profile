import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auto Tech Source | Sparepart Mobil Berkualitas",
  description:
    "Auto Tech Source menyediakan sparepart mobil berkualitas untuk perawatan dan penggantian komponen kendaraan.",

  openGraph: {
    title: "Auto Tech Source | Sparepart Mobil Berkualitas",
    description:
      "Temukan berbagai kebutuhan sparepart mobil berkualitas di Auto Tech Source.",
    siteName: "Auto Tech Source",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1536,
        height: 864,
        alt: "Auto Tech Source - Sparepart Mobil Berkualitas",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}