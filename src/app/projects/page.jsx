import ProjectCards from '@/components/ProjectCards';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className='pt-16 px-16'>
                <h1 className='text-xl md:text-3xl font-bold flex items-center gap-10'>My Projects<span className='flex-1 h-0 border-2 border-dashed border-green-400'></span></h1>
            </div>
            <div>
                <ProjectCards></ProjectCards>
            </div>
        </div>
    );
};

export default page;