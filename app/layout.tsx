import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Inter, Playfair_Display } from "next/font/google";
import { CartProvider } from "@/lib/cartContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: {
    template: "%s | Futech Audios & Innovation",
    default: "Futech Audios & Innovation | Premium Audio Control & DSP Systems",
  },
  description:
    "Engineered in India. Premium 5.1-channel home-theatre remote control kits, DSP decoder boards, and HDMI audio modules.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body
        suppressHydrationWarning
        className="bg-[#FFFFFF] text-[#111111] font-sans min-h-screen flex flex-col antialiased selection:bg-[#C6A96B] selection:text-[#111111] relative overflow-x-hidden"
      >
        {/* Background Atmosphere */}
        <div className="fixed inset-0 pointer-events-none z-[-1] bg-white">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#E9DFC7] opacity-40 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-[#F2F2F0] opacity-60 blur-[150px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(17,17,17,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>

        <CartProvider>
          <Navbar />
          <main className="flex-grow pt-20 z-10 relative">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
