"use client"

import React, { useEffect } from 'react';
import { FaSchool } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { FaCalendarDays } from "react-icons/fa6";

import AOS from 'aos'
import 'aos/dist/aos.css'

const Education = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div className='px-4 pb-10'>
            <div className='py-10 px-4 md:px-16'>
                <h1 className='text-3xl font-bold flex items-center gap-4 md:gap-10'>My Education<span className='flex-1 h-0 border-2 border-dashed border-green-400'></span></h1>
            </div>
            <div className='flex flex-col md:flex-row justify-center gap-10' data-aos="zoom-in-up">
                <div className='border border-green-400 rounded-md shadow-2xl md:w-4/12 py-8 pl-4 space-y-4'>
                    <h1 className='flex gap-4 items-center'><FaSchool className='text-green-400'/>University Of Rajshahi</h1>
                    <h2 className='flex gap-4 items-center'><IoSchoolSharp className='text-green-400'/>B.Sc in Information And Communication Engineering</h2>
                    <h3 className='flex gap-4 items-center'><FaCalendarDays className='text-green-400'/>2021 - Present</h3>
                </div>
                <div className='border border-green-400 rounded-md shadow-2xl md:w-4/12 py-8 pl-4 space-y-4'>
                    <h1 className='flex gap-4 items-center'><FaSchool className='text-green-400'/>Mohammadpur Government College</h1>
                    <h2 className='flex gap-4 items-center'><IoSchoolSharp className='text-green-400'/>Higher Secondary Certificate</h2>
                    <h3 className='flex gap-4 items-center'><FaCalendarDays className='text-green-400'/>2018-2020</h3>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center gap-10 mt-10' data-aos="zoom-in-up">
                <div className='border border-green-400 rounded-md shadow-2xl md:w-4/12 py-8 pl-4 space-y-4'>
                    <h1 className='flex gap-4 items-center'><FaSchool className='text-green-400'/>Dhanmondi Govt Boyz High School</h1>
                    <h2 className='flex gap-4 items-center'><IoSchoolSharp className='text-green-400'/>Secondary School Certificate</h2>
                    <h3 className='flex gap-4 items-center'><FaCalendarDays className='text-green-400'/>2008-2018</h3>
                </div>
            </div>
        </div>
    );
};

export default Education;