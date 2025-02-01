import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';
import { 
  PythonIcon, HtmlIcon, CssIcon, JavascriptIcon, ReactjsIcon, NextjsIcon, MongodbIcon, 
  MysqlIcon, TailwindCSSIcon, BootstrapIcon, FigmaIcon, MiroIcon
} from './Icons';

const Skills = () => {
  // Define progress values
  const htmlProgress = 80; 
  const cssProgress = 75; 
  const JavaScriptProgress = 90;
  const ReactProgress = 85;
  const NextProgress = 90;
  const MongoProgress=80;
  const MysqlProgress=85;
  const TailwindProgress=90;
  const BootstrapProgress=85;
  const FigmaProgress=80;
  const MiroProgress=85;

  const [htmlWidth, setHtmlWidth] = useState(0);
  const [cssWidth, setCssWidth] = useState(0);
  const [JavaScriptWidth, setJavaScriptWidth] = useState(0);
  const [ReactScriptWidth, setReactScriptWidth] = useState(0);
  const [NextScriptWidth, setNextScriptWidth] = useState(0);
  const [MongoScriptWidth, setMongoScriptWidth] = useState(0);
  const [MysqlScriptWidth, setMysqlScriptWidth] = useState(0);
  const [TailwindScriptWidth, setTailwindScriptWidth] = useState(0);
  const [BootstrapScriptWidth, setBootstrapScriptWidth] = useState(0);
  const [FigmaScriptWidth, setFigmaScriptWidth] = useState(0);
  const [MiroScriptWidth, setMiroScriptWidth] = useState(0);

  // Create separate refs for each section to trigger scroll-based animations
  const frontendRef = React.useRef(null);
  const backendRef = React.useRef(null);
  const frameworkRef = React.useRef(null);
  const uiuxRef = React.useRef(null);

  const isFrontendInView = useInView(frontendRef, { once: true });
  const isBackendInView = useInView(backendRef, { once: true });
  const isFrameworkInView = useInView(frameworkRef, { once: true });
  const isUiuxInView = useInView(uiuxRef, { once: true });

  // Trigger the animation when each section is in view
  useEffect(() => {
    if (isFrontendInView) {
      setHtmlWidth(htmlProgress);
      setCssWidth(cssProgress);
      setJavaScriptWidth(JavaScriptProgress);
      setReactScriptWidth(ReactProgress);
      setNextScriptWidth(NextProgress);
    }
    if (isBackendInView) {
      setMongoScriptWidth(MongoProgress);
      setMysqlScriptWidth(MysqlProgress);
    }
    if (isFrameworkInView) {
      setTailwindScriptWidth(TailwindProgress);
      setBootstrapScriptWidth(BootstrapProgress);
    }
    if (isUiuxInView) {
      setFigmaScriptWidth(FigmaProgress);
      setMiroScriptWidth(MiroProgress);
    }
  }, [
    isFrontendInView, isBackendInView, isFrameworkInView, isUiuxInView,
    htmlProgress, cssProgress, JavaScriptProgress, ReactProgress, NextProgress, 
    MongoProgress, MysqlProgress, TailwindProgress, BootstrapProgress, FigmaProgress, MiroProgress
  ]);

  return (
    <>
      <AnimatedText text="SKILLS " className='mb-10 mt-50 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 pt-20'/>
      
      {/* Frontend Skills Section */}
      <section ref={frontendRef} className="flex flex-wrap justify-center w-full mt-2">
        <div className="w-full sm:max-w-xs md:max-w-md lg:max-w-lg p-6 m-4 bg-light dark:bg-dark border-2 border-dark dark:border-light rounded-2xl">
          <h1 className="text-4xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 underline-offset-4 decoration-4">
            FRONTEND SKILLS
          </h1>
          <div className="space-y-6">
            {/* HTML, CSS, JS, React, NextJS Progress Bar Components */}
            <SkillProgressBar icon={<HtmlIcon />} label="HTML" progress={htmlWidth} />
            <SkillProgressBar icon={<CssIcon />} label="CSS" progress={cssWidth} />
            <SkillProgressBar icon={<JavascriptIcon />} label="JAVASCRIPT" progress={JavaScriptWidth} />
            <SkillProgressBar icon={<ReactjsIcon />} label="REACT.JS" progress={ReactScriptWidth} />
            <SkillProgressBar icon={<NextjsIcon />} label="NEXT.JS" progress={NextScriptWidth} />
          </div>
        </div>
      </section>
      
      {/* Backend Skills Section */}
      <section ref={backendRef} className="flex flex-wrap justify-center w-full mt-2">
        <div className="w-full sm:max-w-xs md:max-w-md lg:max-w-lg p-6 m-4 bg-light dark:bg-dark border-2 border-dark dark:border-light rounded-2xl">
          <h1 className="text-4xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 underline-offset-4 decoration-4">
            BACKEND SKILLS
          </h1>
          <div className="space-y-6">
            {/* MongoDB, MySQL Progress Bar Components */}
            <SkillProgressBar icon={<MongodbIcon />} label="MONGO DB" progress={MongoScriptWidth} />
            <SkillProgressBar icon={<MysqlIcon />} label="MYSQL" progress={MysqlScriptWidth} />
          </div>
        </div>
      </section>

      {/* Framework Skills Section */}
      <section ref={frameworkRef} className="flex flex-wrap justify-center w-full mt-2">
        <div className="w-full sm:max-w-xs md:max-w-md lg:max-w-lg p-6 m-4 bg-light dark:bg-dark border-2 border-dark dark:border-light rounded-2xl">
          <h1 className="text-4xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 underline-offset-4 decoration-4">
            FRAMEWORK SKILLS
          </h1>
          <div className="space-y-6">
            {/* TailwindCSS, Bootstrap Progress Bar Components */}
            <SkillProgressBar icon={<TailwindCSSIcon />} label="TAILWINDCSS" progress={TailwindScriptWidth} />
            <SkillProgressBar icon={<BootstrapIcon />} label="BOOTSTRAP" progress={BootstrapScriptWidth} />
          </div>
        </div>
      </section>

      {/* UI/UX Skills Section */}
      <section ref={uiuxRef} className="flex flex-wrap justify-center w-full mt-2">
        <div className="w-full sm:max-w-xs md:max-w-md lg:max-w-lg p-6 m-4 bg-light dark:bg-dark border-2 border-dark dark:border-light rounded-2xl">
          <h1 className="text-4xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 underline-offset-4 decoration-4">
            UI/UX DESIGN SKILLS
          </h1>
          <div className="space-y-6">
            {/* Figma, Miro Progress Bar Components */}
            <SkillProgressBar icon={<FigmaIcon />} label="FIGMA" progress={FigmaScriptWidth} />
            <SkillProgressBar icon={<MiroIcon />} label="MIRO" progress={MiroScriptWidth} />
          </div>
        </div>
      </section>
    </>
  );
};

// Progress Bar Component
const SkillProgressBar = ({ icon, label, progress }) => (
  <div className="flex items-center space-x-4">
    <motion.a
      href="https://x.com/YOGESH_RAJ_S"
      target={"_blank"}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="w-6 mx-1 text-2xl sm:text-3xl"
    >
      {icon}
    </motion.a>
    <div className="w-full">
      <div className="flex justify-between font-bold">
        <span>{label}</span>
        <span className="text-sm text-dark dark:text-light">{progress}%</span>
      </div>
      <div className="relative h-2 rounded bg-light border border-black dark:border-light mt-1 overflow-hidden">
        <motion.div
          className="absolute h-2 rounded bg-primary dark:bg-primaryDark"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        ></motion.div>
      </div>
    </div>
  </div>
);

export default Skills;
