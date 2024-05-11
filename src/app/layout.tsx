import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Logistics Manager",
  description: "A simple logistic manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950 text-zinc-50`}>
        <div className="max-w-[1216px] mx-auto px-8 py-5 flex flex-col gap-5">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
