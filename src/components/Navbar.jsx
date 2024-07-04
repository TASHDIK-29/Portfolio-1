"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {

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
        <nav className="flex flex-col md:flex-row bg-slate-900 items-center">
            <div className="md:w-1/2 flex items-center">
                <img className='w-16 h-16' src="/images/logo.png" alt="image" />
                <h1 className='text-xl text-white font-semibold'>Tashdik-WEB</h1>
            </div>
            <ul className="flex justify-around w-full md:w-1/2">
                {
                    links.map(link => <Link className={pathName === link.path ? 'text-green-500' : 'text-white'} key={link.title} href={link.path}>{link.title}</Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;