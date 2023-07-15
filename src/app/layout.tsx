import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import GameContextProvider from "@/conext/GameContext";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dice Roller Game",
  description: "This is a simple dice roller Game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <GameContextProvider>{children}</GameContextProvider>
      </body>
    </html>
  );
}