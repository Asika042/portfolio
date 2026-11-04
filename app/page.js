"use client"
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";


export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // 1. Read saved preference once on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (saved === null && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDarkMode(true);
    }
    setMounted(true);
  }, []);

  // 2. Apply and save, but only after the initial read is done
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode, mounted]);

  return (
   <>
   <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
   <Header  isDarkMode={isDarkMode} />
   <About  isDarkMode={isDarkMode}/>
   <Services isDarkMode={isDarkMode}/>
   <Work isDarkMode={isDarkMode}/>
   <Contact isDarkMode={isDarkMode} />
   <Footer  isDarkMode={isDarkMode}/>
   </>
  );
}
