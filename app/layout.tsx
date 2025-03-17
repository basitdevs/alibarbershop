import type { Metadata } from "next";
import { Bitter, Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GlobalProvider } from "@/context/GlobalContext";
import Booking from "@/components/Booking";
import MobileNav from "@/components/MobileNav";

const bitter = Bitter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-bitter",
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto",
  subsets: ["latin"],
});
const roboto_condensed = Roboto_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Barber Shop – Old and New School Barber in Vienna",
  description: "Ali Barber Shop – Old and New School Barber in Vienna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bitter.variable} overflow-x-hidden ${roboto.variable} ${roboto_condensed.variable} antialiased`}
      >
        <GlobalProvider>
          <Booking />
          <Header />
          {children}
          <Footer />
          <MobileNav />
        </GlobalProvider>
      </body>
    </html>
  );
}
