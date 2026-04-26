import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saintce | Immersive Garden Dining Experience",
  description: "Experience modern premium dining at Saintce. Fine cuisine, elegant ambiance, and unforgettable memories in the heart of the city.",
  keywords: ["restaurant", "fine dining", "Saintce", "modern dining", "reservation", "gastronomy"],
  authors: [{ name: "Saintce Team" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F0F0F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col selection:bg-brand-gold/30 selection:text-brand-black bg-brand-cream text-brand-black">
        {children}
      </body>
    </html>
  );
}
