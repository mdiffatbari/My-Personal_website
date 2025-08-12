import React from 'react';
import aboutbg from "../../assets/aboutbg.png";

const About = () => {
    return (
        <div>
            <div id="about" className='py-7 md:py-32 w-11/12 mx-auto'>
                    <h1 className='mb-5 md:mb-10 text-2xl md:text-4xl font-heading-font text-center'>About <span className='text-[#fd563f]'>Me</span></h1>
                    <div className='md:flex md:items-center md:gap-8 md:justify-center'>
                        <div>
                            <img
                                src={aboutbg}
                                alt=""
                                className='w-[300px] mx-auto md:w-[400px]'
                            />
                        </div>
                        <div className='md:w-[800px]'>
                            <p className='font-normal text-center md:text-left'>
                                Hi! I’m <span className='text-[#fd563f] text-2xl font-bold'>Md Iffat Bari</span>, a passionate Front-End Web Developer who loves turning ideas into beautiful, user-friendly websites. My programming journey began out of curiosity — I wanted to understand how the websites I used every day were built. I started web development in 2020 and have since learned
                                <span className='font-bold'> HTML, CSS, Git, Bootstrap, Tailwind, JavaScript, React, MongoDB</span>, and many other helpful tools and technologies.
                                I enjoy working on clean, responsive designs that feel great to use — whether it’s a personal project, a client’s portfolio, or a full-fledged web application. Solving design challenges and making things look both simple and polished is one of the things I love most about my work.
                                <br />
                                <br />
                                Beyond coding, I enjoy <span className='font-bold'>✈️traveling, 📖reading books, ⛺camping, and 🌴gardening</span>. These activities help me refresh my mind, spark creativity, and stay motivated.
                            </p>

                        </div>
                    </div>
                </div>
        </div>
    );
};

export default About;