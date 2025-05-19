// app/font.ts or lib/fonts.ts
import { Poppins, Inter } from "next/font/google";

export const displayFont = Poppins({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const textFont = Inter({
  subsets: ["latin"],
  variable: "--font-text",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
