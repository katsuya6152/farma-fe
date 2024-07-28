import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Sidebar from "@/components/layouts/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FarMa",
  description: "Farm Management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="grid min-h-screen md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr]">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
