"use client"

import React, { useEffect } from 'react';

import AOS from 'aos'
import 'aos/dist/aos.css'


const Contact = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div className='min-h-[calc(100vh-64px)] flex '>
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
        </div>
    );
};

export default Contact;