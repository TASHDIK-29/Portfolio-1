"use client"

import React, { useEffect } from 'react';

import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div className='min-h-[calc(100vh-120px)] flex '>
            <div className='w-1/2 p-16 flex items-center justify-center'>
                <div className='bg-green-400 w-1/2 h-[300px] relative' data-aos="fade-left">
                    <div className='h-full w-full absolute left-4 bottom-4' >
                        <img className='h-full' src="/images/about.png" alt="img" data-aos="flip-up"/>
                    </div>
                </div>
            </div>
            <div className='w-1/2 flex flex-col justify-center items-start' data-aos="fade-left">
                <div className='flex flex-col p-10'>
                    <h1 className='text-3xl font-bold mb-10 flex items-center gap-10'>About ME <span className='w-56 h-0 border-2 border-dashed border-green-400'></span></h1>
                    <h3>Motivated Junior MERN stack Developer with a passion for developing responsive, user-friendly web applications. Proficient in core web development technologies. Quick learner and enthusiastic Junior MERN stack Developer seeking to contribute to a team environment.</h3>

                </div>

                <div className='p-10'>
                    <a className='px-4 py-2 mr-5 bg-green-500 text-slate-950 font-semibold' href="https://drive.google.com/file/d/1zMITfM6hdi392VHGHWyRObdfT6sUYObu/view" target="_blank">Resume</a>
                    <a className='px-4 py-2 mr-5 bg-green-500 text-slate-950 font-semibold' href="https://www.linkedin.com/in/tashdikurrahmankhan" target="_blank">Linkedin</a>
                    <a className='px-4 py-2 mr-5 bg-green-500 text-slate-950 font-semibold' href="https://github.com/TASHDIK-29" target="_blank">Github</a>
                </div>
            </div>
        </div>
    );
};

export default About;