import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/helper/scroll-to-top";
import Navbar from "@/components/navbar";

import "./globals.css";
import "@/css/card.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Siro Daves | Software Eng, Mentor",
  description:
    "Software Engineer and Tech Writer. Best at Mobile app development with Flutter, Full Stack development with Mern. Other areas of expertise are Android, .Net and Qt.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}