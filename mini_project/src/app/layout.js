import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './navbar/page';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HMPV Virus Database",
  description: "A comprehensive platform for Human Metapneumovirus (HMPV) research, providing diagnostic tools, genomic data, and drug designing insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
