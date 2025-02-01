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

  useEffect(() => {
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');

    // Check if user has a saved theme preference in localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    // Apply the saved theme
    if (savedTheme === "dark") {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      themeColorMeta.setAttribute('content', '#58E6D9'); // Dark mode color
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      themeColorMeta.setAttribute('content', '#B63E96'); // Light mode color
    }
  }, []);

  // Function to toggle theme and update theme color dynamically
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (newTheme === "dark") {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      themeColorMeta.setAttribute('content', '#58E6D9'); // Dark mode color
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      themeColorMeta.setAttribute('content', '#B63E96'); // Light mode color
    }
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta name="theme-color" content="#B63E96" id="theme-color-meta" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar toggleTheme={toggleTheme} theme={theme} />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}
