import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { profile } from "./data";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const description = `${profile.name}: software engineer and IT specialist working across full-stack development, DevOps, and IT infrastructure.`;

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.title}`,
  description,
  openGraph: { title: profile.name, description, type: "website" },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1a",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <GoogleAnalytics gaId="G-X2N5LP7204" />
      </body>
    </html>
  );
}
