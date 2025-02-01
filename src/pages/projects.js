import Head from 'next/head'; 
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import React from 'react';
import { GithubIcon } from '@/components/Icons';
import Image from 'next/image';
import Link from 'next/link';
import project1 from "../../public/images/projects/qrcode.jpeg";
import project3 from "../../public/images/projects/login.png";
import project4 from "../../public/images/projects/todo.jpeg";
import project5 from "../../public/images/projects/mulcal.jpeg";
import project6 from "../../public/images/projects/ana.jpeg";
import project7 from "../../public/images/projects/pass.jpeg";
import {motion} from "framer-motion";
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl
      rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light 
      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
        rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
        '/>
      <Link href={link} target="_blank" 
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <FramerImage src={img} alt={title} className="w-full h-auto border border-black rounded-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
         whileHover={{scale:1.05}}
         transition={{duration:0.2}} 
         priority
         sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         50vw"
         />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon className="w-10" />
          </Link>
          <Link href={link} target="_blank" className="ml-4 bg-dark text-light p-2 px-6 
            rounded-lg text-lg font-semibold hover:bg-primary dark:bg-light dark:text-dark  dark:hover:bg-primaryDark
            sm:px-4 sm:text-base">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

// Standard Project Component
const Project = ({ type, title, img, link, github, summary }) => {
  return (
    <article className="w-full flex flex-col items-center justify-cenetr rounded-2xl
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
    ">
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
        rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
        '/>
      <Link href={link} target="_blank" 
        className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage src={img} alt={title} className="w-full h-auto border border-black rounded-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" 
          whileHover={{scale:1.05}}
          transition={{duration:0.2}} 
          />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base ">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
     <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>

        <div className="w-full mt-2 flex items-center justify-between">
        <Link href={link} target="_blank" className=" bg-dark text-light p-2 px-6 
            rounded-lg text-lg font-semibold hover:bg-primary dark:bg-light dark:text-dark  dark:hover:bg-primaryDark
            sm:px-4 sm:text-base">
            Visit Project
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon className="w-10" />
          </Link>
          
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Yogesh Raj | Projects Page</title>
        <meta name="description" content="Any description" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center  overflow-hidden dark:text-light ">
        <Layout className='pt-16'>
          <AnimatedText text=" Imagination Unleashed!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="QR-CODE GENERATOR"
                img={project1}
                summary="A simple web application built with Next.js where users can input text, URLs, or any other data, and generate a corresponding QR code. It uses a QR code generation library to create the QR codes dynamically."
                link="https://yogesh-raj-s.github.io/QR-Code-Generator/"
                github="https://yogesh-raj-s.github.io/QR-Code-Generator/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="MULTI-CALCULATOR"
                img={project5} // Replace with actual image
                summary="This website with three calculators: a normal calculator, an Indian loan calculator, and a BMI calculator. Each calculator has its own form with input fields and a button to calculate the result and updates the corresponding element with the result."
                link="https://yogesh-raj-s.github.io/Multicalculator/"
                github="https://yogesh-raj-s.github.io/Multicalculator/"
                type="Standard Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="ANALOG-CLOCK"
                img={project6} // Replace with actual image
                summary=" Displays real-time hours, minutes, and seconds with smooth animations. Uses CSS for a stylish clock face and hands. JavaScript dynamically updates the clock based on the system time."
                link="https://yogesh-raj-s.github.io/iphone-analog-clock/"
                github="https://yogesh-raj-s.github.io/iphone-analog-clock/"
                type="Standard Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="REGISTRATION FORM"
                img={project3} // Replace with actual image
                summary="This registration form with input fields for name, email, password, confirm password, phone, and address. The form is validated using JavaScript before submitting. The validation checks if all input fields are filled in and if the password and confirm password match. If the form is valid, an alert message is displayed indicating that the form was submitted successfully. If the form is invalid, an alert message is displayed indicating that there was an error."
                link="https://yogesh-raj-s.github.io/LoginPage/"
                github="https://yogesh-raj-s.github.io/LoginPage/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="PASSWORD GENERATOR"
                img={project7} // Replace with actual image
                summary="Creates strong, random passwords with customizable length.
Includes options for uppercase, lowercase, numbers, and symbols.
JavaScript dynamically generates and copies passwords to the clipboard. "
                link="https://yogesh-raj-s.github.io/password-generator/"
                github="https://yogesh-raj-s.github.io/password-generator/"
                type="Standard Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="TO-DO-LIST"
                img={project4} // Replace with actual image
                summary=" Allows task creation, editing, and deletion.
Saves tasks in local storage for persistence.
Real-time updates with a clean, responsive design.
Provides an intuitive interface for easy task management. "
                link="https://yogesh-raj-s.github.io/to-do-list/"
                github="https://yogesh-raj-s.github.io/to-do-list/"
                type="Standard Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
