"use client"

import React, { useEffect } from 'react';

import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div className='min-h-screen grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-16' data-aos="fade-up">
            <div>
                <div className='flex justify-between mb-2'>
                    <h1 className=' text-white'>React.js</h1>
                    <p className=' text-white'>Intermediate</p>
                </div>
                <progress className="progress progress-success  w-full" value="50" max="100"></progress>
            </div>
            <div>
                <div className='flex justify-between mb-2'>
                    <h1 className=' text-white'>Next.js</h1>
                    <p className=' text-white'>Novice</p>
                </div>
                <progress className="progress progress-warning w-full" value="30" max="100"></progress>
            </div>
            <div>
                <div className='flex justify-between mb-2'>
                    <h1 className=' text-white'>Node.js</h1>
                    <p className=' text-white'>Novice</p>
                </div>
                <progress className="progress progress-warning  w-full" value="30" max="100"></progress>
            </div>
            <div>
                <div className='flex justify-between mb-2'>
                    <h1 className=' text-white'>Express.js</h1>
                    <p className=' text-white'>Novice</p>
                </div>
                <progress className="progress progress-warning  w-full" value="30" max="100"></progress>
            </div>
            <div>
                <div className='flex justify-between mb-2'>
                    <h1 className=' text-white'>MongoDB</h1>
                    <p className=' text-white'>Novice</p>
                </div>
                <progress className="progress progress-warning w-full" value="30" max="100"></progress>
            </div>
            <div>
                <div className='flex justify-between mb-2'>
                    <h1 className=' text-white'>JavaScript</h1>
                    <p className=' text-white'>Intermediate</p>
                </div>
                <progress className="progress progress-success  w-full" value="50" max="100"></progress>
            </div>
            <div>
                <div className='flex justify-between mb-2'>
                    <h1 className=' text-white'>CSS3</h1>
                    <p className=' text-white'>Intermediate</p>
                </div>
                <progress className="progress progress-success w-full" value="50" max="100"></progress>
            </div>
            <div>
                <div className='flex justify-between mb-2'>
                    <h1 className=' text-white'>Tailwind CSS</h1>
                    <p className=' text-white'>Intermediate</p>
                </div>
                <progress className="progress progress-success w-full" value="50" max="100"></progress>
            </div>
            <div>
                <div className='flex justify-between mb-2'>
                    <h1 className=' text-white'>HTML5</h1>
                    <p className=' text-white'>Intermediate</p>
                </div>
                <progress className="progress progress-success  w-full" value="50" max="100"></progress>
            </div>
            
        </div>
    );
};

export default Skills;