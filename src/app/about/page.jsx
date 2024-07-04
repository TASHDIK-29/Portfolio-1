import About from '@/components/About';
import Education from '@/components/Education';
import React from 'react';

export const metadata = {
    title: "About",
    description: "About | Tashdik-WEB",
  };

const page = () => {
    return (
        <div>
            <About></About>
            <Education></Education>
        </div>
    );
};

export default page;