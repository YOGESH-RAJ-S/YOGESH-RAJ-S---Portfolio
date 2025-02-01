import React from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <div>
      <figure className="absolute left-0 stroke-dark dark:stroke-light">
        <svg
          className="-rotate-90 w-[75px] h-[75px] md:w-[60px] md:h-[60px] sm:w-[50px] sm:h-[50px] xs:w-[40px] xs:h-[40px]"
          viewBox="0 0 100 100"
        >
          <circle
            cx="75"
            cy="50"
            r="20"
            className="stroke-primary dark:stroke-primaryDark stroke-1 fill-none"
          />
          <motion.circle
            cx="75"
            cy="50"
            r="20"
            className="stroke-[5px] fill-light dark:fill-dark"
            style={{
              pathLength: scrollYProgress, // Animate the circle's path
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          />
          <circle
            cx="75"
            cy="50"
            r="10"
            className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark"
          />
        </svg>
      </figure>
    </div>
  );
};

export default LiIcon;
