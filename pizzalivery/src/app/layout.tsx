import type { Metadata } from "next";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { OrderContextProvider } from "./contexts/OrderContext";
import styled from './layout.module.css'
import "./globals.css";

export const metadata: Metadata = {
  title: "Pizzalivery em nextjs",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({children}: LayoutProps) {
  return (
    <html lang="pt-br">
      <OrderContextProvider>
        <body>
          <Header></Header>
          <main className={styled.elementMain}>
            <div className={styled.layoutContainer}>{children}</div>
          </main>
          <Footer></Footer>
        </body>
      </OrderContextProvider>
    </html>
  );
}
