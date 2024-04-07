import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WalletButton } from "@/components/SolanaProvider";
import { AppProvider } from "@/components/AppProvider";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Launchpad platform for Solana",
  description: "From Encode Solana Team 3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <div className="flex flex-col h-screen">
            <div className="navbar flex h-20 flex-row md:mb-2 shadow-lg bg-black text-neutral-content border-b border-zinc-600 bg-opacity-66 items-center px-5 space-x-4 justify-between">
              <div>
                <Link href="/">
                  <Button variant={"secondary"}>Home</Button>
                </Link>
              </div>
              <div>
                <WalletButton />
              </div>
            </div>

            <main className="p-3">{children}</main>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
