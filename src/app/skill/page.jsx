import Skills from '@/components/Skills';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className='pt-10 px-16'>
                <h1 className='text-3xl font-bold flex items-center gap-10'>My Skills<span className='flex-1 h-0 border-2 border-dashed border-green-400'></span></h1>
            </div>
            <Skills></Skills>
        </div>
    );
};

export default page;