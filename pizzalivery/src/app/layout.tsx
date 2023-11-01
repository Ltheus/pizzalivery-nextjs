import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pizzalivery em nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-r">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
