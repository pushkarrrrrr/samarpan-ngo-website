import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samarpan NGO - Making a Difference Together",
  description: "Samarpan NGO is dedicated to empowering communities through education, healthcare, and sustainable development initiatives. Join us in making a positive impact.",
  keywords: ["NGO", "charity", "social work", "community development", "donation", "volunteer"],
  authors: [{ name: "Samarpan NGO" }],
  openGraph: {
    title: "Samarpan NGO - Making a Difference Together",
    description: "Join us in empowering communities through education, healthcare, and sustainable development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
