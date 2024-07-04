"use client"

import React, { useEffect } from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image';
import Link from 'next/link';

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div className='min-h-[calc(100vh-120px)] md:flex p-4'>
            <div className='md:w-1/2 p-8 md:p-16 flex items-center justify-center'>
                <div className='bg-green-400 w-full md:w-1/2 h-[300px] relative' data-aos="fade-left">
                    <div className='h-full w-full absolute left-4 bottom-4' >
                        {/* <img className='h-full' src="/images/about.png" alt="img" data-aos="flip-up"/> */}
                        <Image className='h-full' src="/images/about.png" alt='about.png' width={495} height={505}></Image>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-1/2 flex flex-col justify-center items-start' data-aos="fade-left">
                <div className='flex flex-col md:p-10'>
                    <h1 className='text-3xl font-bold my-10 flex items-center gap-10 w-4/5 md:w-full mx-auto'>About ME <span className='flex-1 md:w-56 h-0 border-2 border-dashed border-green-400'></span></h1>
                    <h3>Motivated Junior MERN stack Developer with a passion for developing responsive, user-friendly web applications. Proficient in core web development technologies. Quick learner and enthusiastic Junior MERN stack Developer seeking to contribute to a team environment.</h3>

                </div>

                <div className='py-4 md:p-10  w-full'>
                    
                    <a className='flex items-center w-1/3 md:w-1/5 px-2 md:px-4 py-2 mr-2 md:mr-5 bg-green-500 text-slate-950 font-semibold' download href="./TashdikResume.pdf">Resume <MdOutlineFileDownload className='text-lg' /></a>
                    {/* <Link target="_blank" href="./Resume-F.pdf">Download Resume</Link> */}
                    {/* <a className=' px-2 md:px-4 py-2 mr-2 md:mr-5 bg-green-500 text-slate-950 font-semibold' href="https://www.linkedin.com/in/tashdikurrahmankhan" target="_blank">Linkedin</a>
                    <a className=' px-2 md:px-4 py-2 mr-2 md:mr-5 bg-green-500 text-slate-950 font-semibold' href="https://github.com/TASHDIK-29" target="_blank">Github</a> */}
                </div>
            </div>
        </div>
    );
};

export default About;