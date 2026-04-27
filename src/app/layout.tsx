import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: "Wonderia Piano — A Magical Piano Adventure",
  description:
    "Transform piano practice into a magical adventure. Game-based learning, real-time feedback, and your personal musical buddy Momo.",
  openGraph: {
    title: "Wonderia Piano — A Magical Piano Adventure",
    description:
      "Transform piano practice into a magical adventure. Game-based learning, real-time feedback, and your personal musical buddy Momo.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "#FAF0DC", color: "#2D1509" }}
      >
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
