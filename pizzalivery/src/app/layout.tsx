import type { Metadata } from "next";
import { Roboto } from "next/font/google";
// import { Footer } from "../components/footer/Footer";
// import { Header } from "../components/header/Header";
import "./globals.css";
import { ElementMain, LayoutContainer } from "./Layout.style";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Pizzalivery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <ElementMain>
          <LayoutContainer>{children}</LayoutContainer>
        </ElementMain>
        <Footer />
      </body>
    </html>
  );
}
