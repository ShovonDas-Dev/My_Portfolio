import type { Metadata, Viewport } from "next";
import { DM_Mono, Inter, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shovon Kumar Das | Developer Portfolio",
  description:
    "Personal portfolio of Shovon Kumar Das, MERN Stack Developer.",
  applicationName: "Shovon.dev",
  authors: [{ name: "Shovon Kumar Das" }],
  creator: "Shovon Kumar Das",
  keywords: [
    "Shovon Kumar Das",
    "MERN Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
  ],
  openGraph: {  
    title: "Shovon Kumar Das | Developer Portfolio",
    description:
      "Personal portfolio of Shovon Kumar Das, MERN Stack Developer.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f7f5" },
    { media: "(prefers-color-scheme: dark)", color: "#101010" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${dmMono.variable}`}
    >
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
