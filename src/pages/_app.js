import '@/styles/globals.css'
import { Montserrat } from "next/font/google"
import Head from "next/head";
import NavBar from '../components/NavBar'; 
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [theme, setTheme] = useState("light"); // Default light mode

  // Set the theme based on localStorage on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  // Update the theme class and meta tag whenever theme changes
  useEffect(() => {
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMeta) {
      const meta = document.createElement('meta');
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }

    if (theme === "dark") {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      themeColorMeta.setAttribute('content', '#58E6D9'); // Dark mode color
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      themeColorMeta.setAttribute('content', '#B63E96'); // Light mode color
    }
  }, [theme]); // Runs whenever `theme` state changes

  // Function to toggle theme and update localStorage
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta name="theme-color" content={theme === "dark" ? "#58E6D9" : "#B63E96"} />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar toggleTheme={toggleTheme} theme={theme} />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
