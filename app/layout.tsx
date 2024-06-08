import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Suspense} from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workr.",
  description: "Talent management for the modern world."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <Suspense>

          {children}</Suspense>
      </body>

      </html>
  );
}
