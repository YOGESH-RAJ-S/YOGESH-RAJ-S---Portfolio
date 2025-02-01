import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../components/Logo';
import {
  TwitterIcon, GithubIcon, LinkedInIcon, BehanceIcon, DribbbleIcon, SunIcon, MoonIcon,
  WhatsappIcon
} from './Icons';
import { motion } from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}>
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2 bg-noscroll`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-dark`}>
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  // Update theme in the HTML element
  useEffect(() => {
    if (mode === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, [mode]);

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
      {/* Hamburger button for mobile */}
      <button
        className='flex-col justify-center items-center hidden lg:flex'
        onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      {/* Desktop navigation */}
      <div className='w-full flex justify-between items-center lg:hidden'>
        <nav>
          <CustomLink href="/" title="Home " className='mr-4' />
          <CustomLink href="/about" title="About" className='mx-4' />
          <CustomLink href="/projects" title="Projects" className='mx-4' />
          {/* <CustomLink href="/articles" title="Articles" className='ml-4' /> */}
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a href="https://wa.me/916369651071"  rel="noopener noreferrer" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3 pr-8">
          <WhatsappIcon />
          </motion.a>
          <motion.a href="https://github.com/yogeshraj001" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
            <GithubIcon />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/yogesh-raj-s-3248182a5/" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3 pr-1">
            <LinkedInIcon />
          </motion.a>
          <motion.a href="https://www.behance.net/yogeshraj8" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
            <BehanceIcon />
          </motion.a>
          <motion.a href="https://dribbble.com/YOGESH_RAJ_S" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
            <DribbbleIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-6 ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
          </button>
        </nav>
      </div>

      {/* Mobile fullscreen navigation */}
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-full bg-dark/90 dark:bg-light/75 z-30 flex flex-col items-center justify-center backdrop-blur-md"
        >
          <nav className="flex flex-col items-center">
            <CustomMobileLink href="/" title="Home " toggle={handleClick} />
            <CustomMobileLink href="/about" title="About" toggle={handleClick} />
            <CustomMobileLink href="/projects" title="Projects" toggle={handleClick} />
            {/* <CustomMobileLink href="/articles" title="Articles" toggle={handleClick} /> */}
          </nav>

          {/* Social links */}
          <nav className="flex items-center justify-between p-10 py-15 space-x-4">
            <motion.a href="https://wa.me/916369651071"  rel="noopener noreferrer"  target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 pr-7 sm:mx-1">
              <WhatsappIcon />
            </motion.a>
            <motion.a href="https://github.com/yogeshraj001" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mr-3 bg-light rounded-full dark:bg-dark sm:mx-1">
              <GithubIcon />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/yogesh-raj-s-3248182a5/" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 ml-3 sm:mx-1">
              <LinkedInIcon />
            </motion.a>
            <motion.a href="https://www.behance.net/yogeshraj8" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 ml-3 sm:mx-1">
              <BehanceIcon />
            </motion.a>
            <motion.a href="https://dribbble.com/YOGESH_RAJ_S" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 ml-3 sm:mx-1">
              <DribbbleIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`w-6 ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
              {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
            </button>
          </nav>

          {/* Close button */}
          <button
            className="absolute top-4 my-4 mx-4 left-4 text-light dark:bg-dark:text-light"
            onClick={handleClick}
          >
            <span className={`bg-light dark:bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-light dark:bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-light dark:bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
          </button>
        </motion.div>
      ) : null}

      {/* Logo */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
