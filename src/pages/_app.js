import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [theme, setTheme] = useState('light'); // Default theme

  useEffect(() => {
    if (typeof window === 'undefined') return; // Prevent SSR issues

    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return; // Ensure document exists

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMeta) return; // Prevent errors if meta tag is missing

    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeColorMeta.setAttribute('content', '#58E6D9');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      themeColorMeta.setAttribute('content', '#B63E96');
    }
  }, [theme]);

  // Function to toggle theme and update localStorage
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta name="theme-color" content={theme === 'dark' ? '#58E6D9' : '#B63E96'} />
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
