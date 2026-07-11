import type { Metadata } from "next";
import { Anuphan, Manrope } from "next/font/google";
import "./globals.css";

const thai = Anuphan({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  weight: "variable",
  display: "swap",
});

const display = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kanjanawan Chaophichit | Resume",
  description: "เรซูเม่ของ Kanjanawan Chaophichit — Administrator, Accounting & Supply Chain Coordinator",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th" className={`${thai.variable} ${display.variable}`}><body>{children}</body></html>;
}
