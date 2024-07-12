"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { MdOutlineFileDownload } from "react-icons/md";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);


    const pathName = usePathname();

    const links = [
        {
            title: "Home",
            path: '/'
        },
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Skill",
            path: '/skill'
        },
        {
            title: "Projects",
            path: '/projects'
        },
        {
            title: "Contact",
            path: '/contact'
        },

    ]

    return (
        <nav className="relative bg-slate-900 shadow">
            <div className="container px-6 py-1 mx-auto lg:flex lg:justify-between lg:items-center">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img className='w-16 h-16' src="/images/logo.png" alt="image" />
                        <h1 className='text-xl text-white font-semibold'>Tashdik-WEB</h1>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                <div
                    className={`absolute inset-x-0 z-20 w-full transition-all duration-300 ease-in-out bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                        }`}
                >
                    <div className="flex flex-col lg:flex-row">
                        {
                            links.map(link => <Link className={pathName === link.path ? 'text-green-500 ml-10 mb-2 lg:mb-0' : 'text-white ml-10 mb-2 lg:mb-0'} key={link.title} href={link.path}>{link.title}</Link>)
                        }
                    </div>

                    <div className="flex justify-start md:block p-1">
                        <a download href="./TashdikResume.pdf" className="relative inline-flex items-center justify-center ml-8 px-3 py-1 overflow-hidden font-medium text-green-600 transition duration-300 ease-out border-2 border-green-500 rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
                                <MdOutlineFileDownload className='text-3xl' />
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full ease">Resume</span>
                            <span className="relative invisible">Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
