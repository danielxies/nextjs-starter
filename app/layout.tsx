import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "starter",
  description: "dx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="icon.png" type="image/png" />
      </head>
      <body className={`${inter.className} dark`}> {/* Apply dark class immediately */}
        {children}
      </body>
    </html>
  );
}