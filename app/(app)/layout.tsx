import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Providers from "../providers/Providers";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Navbar/sidebar";


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
  description: "welcome to takTik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  >
      <body
        className={`max-h-screen h-screen flex flex-col  ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>

   
        <Navbar/>
        <main className="flex ">
            <div className="hidden md:inline">
              <Sidebar/>
            </div>
            <div className="flex p-8 grow h-full overflow-auto max-h-[85vh]"></div>

        {children}
        </main>
        </Providers>
      </body>
    </html>
  );
}
