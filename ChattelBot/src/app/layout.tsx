import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chattelbot - AI-Powered Chatbot for Modern Businesses",
  description:
    "Chattelbot connects businesses to AI, helping them stay up-to-date with technology. Our chatbot answers FAQs, automates tasks, and converts leads—so you can focus on what matters most.",

    icons: {
      icon: "/images/chattelfavicon.jpg", // Add your favicon here
    },
  };



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-uncut`}>{children}</body>
    </html>
  );
}
