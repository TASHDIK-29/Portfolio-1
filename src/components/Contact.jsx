"use client"

import React, { useEffect } from 'react';
import emailjs from '@emailjs/browser';

import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image';
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Contact = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])


    const sendEmail = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const templateParams = {
            from_name : name,
            to_name : 'Tashdikur Rahman Khan',
            message
        }

        // console.log(templateParams);

        emailjs
            .send("service_9dlnzx6", "template_umhbgug", templateParams, {
                publicKey: "HEZCysTKcqOtb7MBU",
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            {/* <div className='min-h-[calc(100vh-64px)] flex '>
                <div className='w-1/2 p-16 flex items-center justify-center' data-aos="fade-right">
                    <div className='bg-green-400 w-1/2 h-[300px] relative'>
                        <div className='h-full w-full absolute left-4 bottom-4'>
                            <img className='h-full' src="/images/contact.jpg" alt="img" data-aos="zoom-in-up" />
                        </div>
                    </div>
                </div>
                <div className='w-1/2 flex items-center' data-aos="fade-left">
                    <div className=' flex flex-col p-6 space-y-4'>
                        <h1 className='text-3xl font-bold mb-10 flex items-center gap-10'>Contact Details <span className='w-56 h-0 border-2 border-dashed border-green-400'></span></h1>
                        <div className='flex'>
                            <h3 className='w-1/4 text-green-500 font-bold'>Address :</h3>
                            <p>Rajshahi, Bangladesh</p>
                        </div>
                        <div className='flex'>
                            <h3 className='w-1/4 text-green-500 font-bold'>WhatsApp :</h3>
                            <p>+880-1407736714</p>
                        </div>
                        <div className='flex'>
                            <h3 className='w-1/4 text-green-500 font-bold'>Email :</h3>
                            <p>trk.ice153@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <section className="min-h-screen bg-white dark:bg-slate-950">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:flex lg:items-center lg:-mx-10">
                        <div className="lg:w-1/2 lg:mx-10" data-aos="fade-up">
                            <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">Let’s talk</h1>

                            <p className="mt-4 text-gray-500 dark:text-gray-400">
                                Ask me anything and I would love
                                to hear from you
                            </p>

                            <form onSubmit={sendEmail} className="mt-12">
                                <div className="-mx-2 md:items-center md:flex">
                                    <div className="flex-1 px-2">
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                        <input type="text" name='name' placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div className="flex-1 px-2 mt-4 md:mt-0">
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                        <input type="email" name='email' placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                </div>

                                <div className="w-full mt-4">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                    <textarea name='message' className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                                </div>

                                <input type="submit" value="Get in touch" className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 cursor-pointer" />
                            </form>
                        </div>

                        <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10" data-aos="fade-left">
                            <Image className='hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96' src="/images/about.png" alt='about.png' width={495} height={505}></Image>

                            <div className="mt-6 space-y-8 md:mt-8">
                                <p className="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>

                                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                                        Rajshahi, Bangladesh
                                    </span>
                                </p>

                                <p className="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>

                                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">+88-01407736714</span>
                                </p>

                                <p className="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>

                                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">trk.ice153@gmail.com</span>
                                </p>
                            </div>

                            <div className="mt-6 w-80 md:mt-8">
                                <h3 className="text-gray-600 dark:text-gray-300 ">Connect With</h3>

                                <div className="flex mt-4 -mx-1.5 ">
                                    <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="https://www.linkedin.com/in/tashdikurrahmankhan">
                                    <FaLinkedin  className='text-2xl' />
                                    </a>

                                    <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="https://github.com/TASHDIK-29">
                                    <FaSquareGithub  className='text-2xl' />
                                    </a>

                                    <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="https://www.facebook.com/tashdik.khan.92">
                                    <FaFacebookSquare className='text-2xl' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;