import '@/styles/globals.css'
import { Montserrat } from "next/font/google"
import Head from "next/head";
import NavBar from '../components/NavBar'; 
import Logo from '../components/Logo'; 
import Footer from '@/components/Footer';
import Layout from '../components/Layout';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Ensure light mode is applied when the app is loaded
  useEffect(() => {
    // Set light mode manually when the page first loads
    document.documentElement.classList.add('light');  // Add a light class
    document.documentElement.classList.remove('dark');  // Remove dark class

    // Optionally, set the initial theme color here
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    themeColorMeta.setAttribute('content', '#58E6D9'); // Light mode color

  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        {/* Add theme-color meta tag */}
        <meta name="theme-color" content="#58E6D9" id="theme-color-meta" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}
