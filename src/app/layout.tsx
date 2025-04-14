import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import ParticlesBackground from "../components/ParticlesBackground";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AbouSolutions | Templates sur Mesure & Création de MVP",
  description: "Plateforme de vente de templates personnalisés et services de création de MVP pour vos projets web et mobile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background-dark`}
      >
        <SmoothScroll>
          <ParticlesBackground />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
