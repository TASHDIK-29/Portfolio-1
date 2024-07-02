"use client"

import Image from 'next/image';
import React, { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { FaArrowRightLong } from "react-icons/fa6";

import AOS from 'aos'
import 'aos/dist/aos.css'

const Banner = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div className='min-h-[calc(100vh-64px)] flex flex-col-reverse md:flex-row p-8'>
            <div className='mt-4 md:mt-0 md:w-3/5  flex flex-col justify-center items-center' data-aos="fade-up">
                <div className=' space-y-6 '>
                    <h3 className='text-lg text-green-400'>Hello,</h3>
                    <h1 className='text-3xl md:text-5xl font-bold'>I&apos;m Tashdikur <br /> Rahman Khan</h1>
                    <div className='flex'>
                        <span className='border-2 border-green-400 p-3 font-semibold'>WEB DEVELOPER</span>
                        <span className='bg-green-400 p-3 flex items-center'>
                            <FaArrowRightLong className='text-slate-950 text-xl' /></span>
                    </div>

                </div>
                <div className='w-3/4 md:w-5/12 mt-2'>
                    <Marquee>
                        <span className='mx-4'>React.js</span>
                        <span className='mx-4'>Next.js</span>
                        <span className='mx-4'>Node.js</span>
                        <span className='mx-4'>Express.js</span>
                        <span className='mx-4'>Tailwind Css</span>
                        <span className='mx-4'>Firebase</span>
                        <span className='mx-4'>HTML5</span>
                        <span className='mx-4'>CSS3</span>
                        <span className='mx-4'>JavaScript</span>
                    </Marquee>
                </div>
            </div>
            <div className='md:w-2/5 flex items-center justify-start'>
                <div className='bg-green-400 w-full md:w-1/2 h-[300px] relative' data-aos="fade-left">
                    <div className='h-full w-full absolute left-4 bottom-4' >
                        {/* <img className='h-full' src="/images/about.png" alt="img" data-aos="flip-up"/> */}
                        <Image className='h-full' src="/images/about.png" alt='about.png' width={495} height={505}></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;