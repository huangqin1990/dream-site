import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "梦链数字科技",
  description: "梦链数字科技官网",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="min-h-full min-w-[375px]">
        <NavBar />
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-4 pb-4 px-4 flex-1 flex flex-row" style={{ 'minHeight': 'calc(100vh - 189px'  }}>
            {children}
        </div>
        <Footer />
      </div>
        </body>
    </html>
  );
}
