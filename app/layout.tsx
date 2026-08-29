import type { Metadata } from "next";
import { Michroma } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const michroma = Michroma({
  weight: "400", // Michroma only has 400 weight on Google Fonts
  variable: "--font-michroma",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Webanox",
    default: "Webanox — Digital Products for Cinema",
  },
  description: "Webanox creates digital infrastructure and experiences for modern cinema. We build websites, software, apps, and identities for businesses that live on screen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${michroma.variable}`}>
      <body className="min-h-screen flex flex-col pt-16">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
