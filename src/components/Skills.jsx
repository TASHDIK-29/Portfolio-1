"use client"

import React, { useEffect } from 'react';

import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div className='min-h-screen grid grid-cols-2 gap-10 p-16'>
            <div data-aos="slide-right">
                <div className='flex justify-between mb-2'>
                    <h1>React.js</h1>
                    <p>Advanced</p>
                </div>
                <progress className="progress progress-info  w-full" value="80" max="100"></progress>
            </div>
            <div data-aos="slide-left">
                <div className='flex justify-between mb-2'>
                    <h1>Next.js</h1>
                    <p>Novice</p>
                </div>
                <progress className="progress progress-warning w-full" value="30" max="100"></progress>
            </div>
            <div data-aos="slide-right">
                <div className='flex justify-between mb-2'>
                    <h1>Node.js</h1>
                    <p>Intermediate</p>
                </div>
                <progress className="progress progress-success  w-full" value="50" max="100"></progress>
            </div>
            <div data-aos="slide-left">
                <div className='flex justify-between mb-2'>
                    <h1>Express.js</h1>
                    <p>Intermediate</p>
                </div>
                <progress className="progress progress-success  w-full" value="50" max="100"></progress>
            </div>
            <div data-aos="slide-right">
                <div className='flex justify-between mb-2'>
                    <h1>MongoDB</h1>
                    <p>Novice</p>
                </div>
                <progress className="progress progress-warning w-full" value="30" max="100"></progress>
            </div>
            <div data-aos="slide-left">
                <div className='flex justify-between mb-2'>
                    <h1>JavaScript</h1>
                    <p>Intermediate</p>
                </div>
                <progress className="progress progress-success  w-full" value="50" max="100"></progress>
            </div>
            <div data-aos="slide-right">
                <div className='flex justify-between mb-2'>
                    <h1>CSS3</h1>
                    <p>Advanced</p>
                </div>
                <progress className="progress progress-info w-full" value="80" max="100"></progress>
            </div>
            <div data-aos="slide-left">
                <div className='flex justify-between mb-2'>
                    <h1>Tailwind CSS</h1>
                    <p>Advanced</p>
                </div>
                <progress className="progress progress-info w-full" value="80" max="100"></progress>
            </div>
            <div data-aos="slide-right">
                <div className='flex justify-between mb-2'>
                    <h1>HTML5</h1>
                    <p>Intermediate</p>
                </div>
                <progress className="progress progress-success  w-full" value="50" max="100"></progress>
            </div>
            
        </div>
    );
};

export default Skills;