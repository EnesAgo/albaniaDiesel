import Image from "next/image";
import { ToastContainer } from "react-toastify";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </>
  );
}
