import type { Metadata } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/Landing/Footer";
import Header from "./components/Landing/Header";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Conexus",
  description: "Conexus - Where all Abilities meet Possibilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={`antialiased text-neutral-600`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
  );
}
