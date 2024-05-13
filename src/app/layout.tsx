import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const readexPro = Readex_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amigo",
  description:
    "A platform to manage your expenses and split them with friends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(readexPro.className, "mocha")}>{children}</body>
    </html>
  );
}
