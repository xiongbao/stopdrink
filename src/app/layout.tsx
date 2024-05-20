import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/webp" href="/images/favicon.png" />
      </head>
      <body className={`${inter.className} bg-gray-800 text-white bg-[url(/images/drink.fail.jpg)] bg-no-repeat bg-cover bg-center`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
