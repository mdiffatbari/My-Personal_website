import React from 'react';

const Education = () => {
    return (
        <div id='education' className="w-11/12 max-w-5xl mx-auto py-10">
            
            <h1 className="mb-6 md:mb-12 text-2xl md:text-4xl font-heading-font text-center font-bold">
                <span className="text-[#fd563f]">Educational </span>Background
            </h1>

            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl mx-auto p-6 md:p-8 shadow-lg transition-transform hover:scale-105 hover:shadow-xl max-w-2xl">
                <h2 className="text-xl md:text-2xl font-semibold text-[#fd563f] mb-2">
                    BSc in Computer Science and Engineering
                </h2>
                <p className="text-white/90 text-sm md:text-base">
                    🏫 Hajee Mohammad Danesh Science and Technology University
                </p>
                <p className='py-2'>📅 2018-2022</p>
            </div>
        </div>

    );
};

export default Education;