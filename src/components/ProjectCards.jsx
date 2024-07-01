"use client"

import Image from 'next/image';
import React, { useEffect } from 'react';
import { FiArrowUpRight } from "react-icons/fi";

import AOS from 'aos'
import 'aos/dist/aos.css'

const ProjectCards = () => {

    // const Projects = [
    //     {
    //         "id": 1,
    //         "title": "ShopNinja",
    //         "category": "Parcel Management System",
    //         "technology": "React.js, Node.js, Express.js, MongoDB",
    //         "liveLink": "https://shipninja-a12.web.app",
    //         "clientLink": "https://github.com/TASHDIK-29/ShopNinja-Client",
    //         "serverLink": "https://github.com/TASHDIK-29/ShopNinja-Server",
    //         "image": "Parcel Management System",
    //     },
    //     {
    //         "id": 2,
    //         "title": "ShopNinja",
    //         "category": "Parcel Management System",
    //         "technology": "React.js, Node.js, Express.js, MongoDB",
    //         "liveLink": "Parcel Management System",
    //         "clientLink": "Parcel Management System",
    //         "serverLink": "Parcel Management System",
    //         "image": "Parcel Management System",
    //     },
    //     {
    //         "id": 3,
    //         "title": "ShopNinja",
    //         "category": "Parcel Management System",
    //         "technology": "React.js, Node.js, Express.js, MongoDB",
    //         "liveLink": "Parcel Management System",
    //         "clientLink": "Parcel Management System",
    //         "serverLink": "Parcel Management System",
    //         "image": "Parcel Management System",
    //     },

    // ]

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-16'>
            <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"  data-aos="zoom-in-up">
                {/* <img src="/images/shopNinja2.png" alt="img" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" /> */}
                <Image className='h-72' src="/images/shopNinja2.png" alt="img" width={1366} height={1056}></Image>
                
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-3xl font-semibold tracking-wide">Shop Ninja</h2>
                        <p className="dark:text-gray-800 font-semibold">Parcel Management System</p>
                        <h3 className='flex flex-col md:flex-row'><span className='w-2/3 font-semibold'>Key Technologies :</span> <span className='font-bold'>React.js, Node.js, Express.js, MongoDB</span></h3>
                        <div className='flex justify-between'>
                            <a href="https://shipninja-a12.web.app" target="_blank" className='flex text-green-600 font-bold'>Live Link <FiArrowUpRight /></a>
                            <a href="https://github.com/TASHDIK-29/ShopNinja-Client" target="_blank" className='flex text-green-600 font-bold'>Client <FiArrowUpRight /></a>
                            <a href="https://github.com/TASHDIK-29/ShopNinja-Server" target="_blank" className='flex text-green-600 font-bold'>Server <FiArrowUpRight /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"  data-aos="zoom-in-up">
                {/* <img src="/images/workWave.png" alt="img" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" /> */}
                <Image className='h-72' src="/images/workWave.png" alt="img" width={1366} height={1150}></Image>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-3xl font-semibold tracking-wide">Work Wave</h2>
                        <p className="dark:text-gray-800 font-semibold">Volunteer Management System</p>
                        <h3 className='flex flex-col md:flex-row'><span className='w-2/3 font-semibold'>Key Technologies :</span> <span className='font-bold'>React.js, Node.js, Express.js, MongoDB</span></h3>
                        <div className='flex justify-between'>
                            <a href="https://workwave-a11.web.app" target="_blank" className='flex text-green-600 font-bold'>Live Link <FiArrowUpRight /></a>
                            <a href="https://github.com/TASHDIK-29/WorkWave-Client" target="_blank" className='flex text-green-600 font-bold'>Client <FiArrowUpRight /></a>
                            <a href="https://github.com/TASHDIK-29/WorkWave-Server" target="_blank" className='flex text-green-600 font-bold'>Server <FiArrowUpRight /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"  data-aos="zoom-in-up">
                {/* <img src="/images/trekTrove.png" alt="img" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" /> */}
                <Image className='h-72' src="/images/trekTrove.png" alt="img" width={1366} height={1150}></Image>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-3xl font-semibold tracking-wide">Trek Trove</h2>
                        <p className="dark:text-gray-800 font-semibold">Tourism Management System</p>
                        <h3 className='flex flex-col md:flex-row'><span className='w-2/3 font-semibold'>Key Technologies :</span> <span className='font-bold'>React.js, Node.js, Express.js, MongoDB</span></h3>
                        <div className='flex justify-between'>
                            <a href="https://trektrove-a10.web.app" target="_blank" className='flex text-green-600 font-bold'>Live Link <FiArrowUpRight /></a>
                            <a href="https://github.com/TASHDIK-29/TrekTrove-Client" target="_blank" className='flex text-green-600 font-bold'>Client <FiArrowUpRight /></a>
                            <a href="https://github.com/TASHDIK-29/TrekTrove-Server" target="_blank" className='flex text-green-600 font-bold'>Server <FiArrowUpRight /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"  data-aos="zoom-in-up">
                {/* <img src="/images/khan.png" alt="img" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" /> */}
                <Image className='h-72' src="/images/khan.png" alt="img" width={1366} height={1150}></Image>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-3xl font-semibold tracking-wide">KHAN Real Estate</h2>
                        <p className="dark:text-gray-800 font-semibold">Real Estate Website</p>
                        <h3 className='flex flex-col md:flex-row'><span className='w-2/3 font-semibold'>Key Technology :</span> <span className='font-bold'>React.js, JavaScript, Tailwind CSS, Firebase</span></h3>
                        <div className='flex justify-between'>
                            <a href="https://khan-real-estate-9b996.web.app" target="_blank" className='flex text-green-600 font-bold'>Live Link <FiArrowUpRight /></a>
                            <a href="https://github.com/TASHDIK-29/Khan-Real-Estate-a9" target="_blank" className='flex text-green-600 font-bold'>Github <FiArrowUpRight /></a>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"  data-aos="zoom-in-up">
                {/* <img src="/images/book.png" alt="img" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" /> */}
                <Image className='h-72' src="/images/book.png" alt="img" width={1366} height={1150}></Image>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-3xl font-semibold tracking-wide">Book-House</h2>
                        <p className="dark:text-gray-800 font-semibold">Online Library System</p>
                        <h3 className='flex flex-col md:flex-row'><span className='w-2/3 font-semibold'>Key Technologies :</span> <span className='font-bold'>React.js, JavaScript, Tailwind CSS</span></h3>
                        <div className='flex justify-between'>
                            <a href="https://td-bookhouse29.netlify.app" target="_blank" className='flex text-green-600 font-bold'>Live Link <FiArrowUpRight /></a>
                            <a href="https://github.com/TASHDIK-29/Book-House-a8" target="_blank" className='flex text-green-600 font-bold'>Github <FiArrowUpRight /></a>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"  data-aos="zoom-in-up">
                {/* <img src="/images/cook.png" alt="img" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" /> */}
                <Image className='h-72' src="/images/cook.png" alt="img" width={1366} height={1150}></Image>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-3xl font-semibold tracking-wide">Cook & Calories</h2>
                        <p className="dark:text-gray-800 font-semibold">Online Cooking Platform</p>
                        <h3 className='flex flex-col md:flex-row'><span className='w-2/3 font-semibold'>Key Technologies :</span> <span className='font-bold'>React.js, JavaScript, Tailwind CSS</span></h3>
                        <div className='flex justify-between'>
                            <a href="https://td-cookcalory29.netlify.app" target="_blank" className='flex text-green-600 font-bold'>Live Link <FiArrowUpRight /></a>
                            <a href="https://github.com/TASHDIK-29/Cook-Calory-a7" target="_blank" className='flex text-green-600 font-bold'>Github <FiArrowUpRight /></a>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"  data-aos="zoom-in-up">
                {/* <img src="/images/metlib.png" alt="img" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" /> */}
                <Image className='h-72' src="/images/metlib.png" alt="img" width={1366} height={1150}></Image>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-3xl font-semibold tracking-wide">MeTlib</h2>
                        <p className="dark:text-gray-800 font-semibold">Online Blogging Platform</p>
                        <h3 className='flex flex-col md:flex-row'><span className='w-2/3 font-semibold'>Key Technologies :</span> <span className='font-bold'>JavaScript, Tailwind CSS, HTML</span></h3>
                        <div className='flex justify-between'>
                            <a href="https://metlib-td.netlify.app" target="_blank" className='flex text-green-600 font-bold'>Live Link <FiArrowUpRight /></a>
                            <a href="https://github.com/TASHDIK-29/MetLib-a6" target="_blank" className='flex text-green-600 font-bold'>Github <FiArrowUpRight /></a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCards;