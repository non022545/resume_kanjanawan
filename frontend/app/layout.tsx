import type { Metadata } from "next";
import { Noto_Sans_Thai, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const thai = Noto_Sans_Thai({ variable: "--font-thai", subsets: ["thai", "latin"], display: "swap" });
const display = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  title: "Kanjanawan Chaophichit | Resume",
  description: "เรซูเม่ของ Kanjanawan Chaophichit — Administrator, Accounting & Supply Chain Coordinator",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th" className={`${thai.variable} ${display.variable}`}><body>{children}</body></html>;
}
