import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: 'Tashdik-WEB',
    template: "%s | Tashdik-WEB"
  },
  description: "Portfolio by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-64px)] bg-slate-950">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
