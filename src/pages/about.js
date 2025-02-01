import AnimatedText from '@/components/AnimatedText'
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import profilePic from "../../public/images/profile/yog2.png"
import Image from 'next/image'
import { useInView, useSpring, useMotionValue } from 'framer-motion'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>;
}

const about = () => {
    return (
        <>
            <Head>
                <title> Yogesh Raj | About Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion gives purpose life! " className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>BIOGRAPHY</h2>
                            <div className="text-justify">
                                <p className="font-medium">
                                    Hi, I’m Yogesh Raj, a passionate and ambitious individual who has recently completed my Master of Computer Applications (MCA) at Meenakshi Ramaswamy Engineering College, affiliated with Anna University. My journey into the world of technology has been driven by a deep curiosity to understand how digital experiences are built and a strong desire to create solutions that make a difference in people’s lives.
                                </p>
                                <p className="my-4 font-medium">
                                    I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.
                                </p>
                                <p className="font-medium">
                                    I am eager to collaborate with like-minded individuals and organizations that value creativity, innovation, and a user-centered approach. My vision is to build a career where I can contribute my expertise as a UI/UX designer and full-stack developer to create impactful solutions that solve real-world problems.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <div className="relative w-full h-auto rounded-2xl overflow-hidden">
                                <Image
                                    src={profilePic}
                                    alt="Yogesh Raj"
                                    className="w-full h-auto rounded-2xl"
                                    priority
                                    sizes="(max-width: 768px) 100vw,
                                          (max-width: 1200px) 50vw,
                                          50vw"
                                />
                                {/* Inner Shadow for Light and Dark Modes */}
                                <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-black/40 to-transparent dark:from-white/20 dark:to-transparent shadow-inner-light dark:shadow-inner-dark' />
                            </div>
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={2} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'> Satisfied Clients</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={5} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={2} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'> Months of Experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about
