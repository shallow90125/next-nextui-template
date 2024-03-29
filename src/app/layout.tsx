import Header from "@/components/Header";
import Providers from "@/components/Providers";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const font = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" dark">
      <body className={font.className}>
        <Providers>
          <Header />
          <main className=" grid min-h-[calc(100dvh_-_3.75rem)] place-content-center place-items-center gap-8 p-4">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
