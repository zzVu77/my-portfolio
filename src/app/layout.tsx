import type { Metadata } from "next";
import { Geist, Geist_Mono, Overpass } from "next/font/google";
import "./globals.css";
import SplashCursor from "@/components/animate/SplashCursor ";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const overPass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Vu77.Dev | Frontend Developer Portfolio",
  description:
    "Hi, I am Vu, a frontend developer specializing in building responsive, user-friendly web applications with modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${overPass.variable} antialiased`}
      >
        <SplashCursor />
        {children}
      </body>
    </html>
  );
}
