import Image from 'next/image';
import React from 'react';
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="container p-4 md:p-12 mx-auto">
                <div className="lg:flex">
                    <div className="w-full -mx-6 lg:w-2/5">
                        <div className="px-6">
                            <div className='flex items-center'>
                                <Image className='w-16 h-16' src={'/images/logo.png'} alt='logo' width={352} height={464}></Image>
                                <h1 className='text-white font-bold text-2xl md:text-3xl'>Tashdik-WEB</h1>
                            </div>
                            <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Junior MERN stack developer skilled in MongoDB, Express.js, React, and Node.js, passionate about creating dynamic web applications.</p>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                            <div>
                                <h3 className="text-gray-700 uppercase dark:text-white">Technology</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">React.js</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Node.js</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">JavaScript</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tailwind CSS</a>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase dark:text-white">Soft Skill</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Quick Learner</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Active Listener</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Team Man</a>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase dark:text-white">Connect With</h3>
                                <div className='flex items-center gap-3 my-4'>
                                    <a href="https://www.linkedin.com/in/tashdikurrahmankhan" target="_blank"><FaLinkedin       className='text-2xl' /></a>
                                    <a href="https://github.com/TASHDIK-29" target="_blank"><FaSquareGithub   className='text-2xl' /></a>
                                    <a href="https://www.facebook.com/tashdik.khan.92" target="_blank"><FaFacebookSquare className='text-2xl' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

                <div>
                    <p className="text-center text-gray-500 dark:text-gray-400">© Copyright 2024 - All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;