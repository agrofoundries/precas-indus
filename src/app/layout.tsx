import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premier Enterprise Growth & Performance Digital Agency",
  description: "Tier-1 US digital growth architecture agency engineering high-velocity paid performance, visual brand systems, full-funnel lifecycle marketing, and closed-loop data attribution.",
  icons: {
    icon: "/images/PET_Blue.png",
    shortcut: "/images/PET_Blue.png",
    apple: "/images/PET_Blue.png",
  },
  openGraph: {
    title: "Engineering Scalable Growth for Modern Enterprise Brands",
    description: "Data-backed acquisition, brand systems, and performance architecture for Fortune 500 and high-growth category leaders.",
    images: ["/images/PET_Blue.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${spaceGrotesk.variable} font-sans scroll-smooth antialiased`}>
      <body className="font-sans text-navy-900 bg-white min-h-screen selection:bg-brand-600 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
