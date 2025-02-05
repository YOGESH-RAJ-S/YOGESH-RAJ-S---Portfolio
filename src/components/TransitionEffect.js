import React from 'react';
import { motion } from 'framer-motion';

const TransitionEffect = () => {
  return (
    <>
      {/* First Layer */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary dark:bg-primaryDark"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: "100%", width: "100%" }}  // Fix exit animation
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Second Layer */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: "100%", width: "100%" }}  // Fix exit animation
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />

      {/* Third Layer */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: "100%", width: "100%" }}  // Fix exit animation
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;
