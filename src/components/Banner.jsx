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
        <div className='min-h-[calc(100vh-64px)] flex'>
            <div className='w-2/3  flex flex-col justify-center items-center' data-aos="fade-up">
                <div className=' space-y-6 '>
                    <h3 className='text-lg text-green-400'>Hello,</h3>
                    <h1 className='text-5xl font-bold'>I'm Tashdikur <br /> Rahman Khan</h1>
                    <div className='flex'>
                        <span className='border-2 border-green-400 p-3 font-semibold'>WEB DEVELOPER</span>
                        <span className='bg-green-400 p-3 flex items-center'>
                            <FaArrowRightLong className='text-slate-950 text-xl' /></span>
                    </div>

                </div>
                <div className='w-2/6 mt-2'>
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
            <div className='bg-green-600 w-1/3 relative'>
                <div className=' absolute -left-72 bottom-0' data-aos="zoom-in-up">
                    <Image className='h-[600px]' src="/images/new2.png" alt="image" width={840} height={729} />
                    {/* <img className='h-[600px]' src="/images/new2.png" alt="image" /> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;