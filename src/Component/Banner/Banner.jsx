import React from 'react';
import myPic from "../../assets/mypic.png"
import { faSquareFacebook, faSquareGithub, faSquareLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="hero py-7 md:py-20 items-center">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    <img
                        src={myPic}
                        className="max-w-[80%] md:max-w-[40%]"
                    />
                    <div className='max-w-[90%] md:max-w-[50%]'>
                        <h1 className="md:text-[24px]">Hello👋 I am,</h1>
                        <h1 className="text-4xl md:text-9xl font-bold font-heading-font">Md Iffat Bari</h1>
                        <h1 className="md:text-[30px]">A <span className='text-[#fd563f]'>Frontend Web Developer</span></h1>
                        <p className="py-6">
                            I am a passionate Frontend Web Developer with expertise in HTML, CSS, Tailwind CSS, JavaScript, React, Git, Node.js, and MongoDB. I specialize in building clean, responsive, and user-friendly websites that combine functionality with great design.
                        </p>
                        <div className='pb-8 flex gap-2'>
                            <a target='_blank'  href="https://www.linkedin.com/in/mdiffatbari/"><FontAwesomeIcon className='text-[30px]' icon={faSquareLinkedin} /></a>
                            <a target='_blank'  href="https://github.com/mdiffatbari"><FontAwesomeIcon className='text-[30px]' icon={faSquareGithub} /></a>
                            <a target='_blank'  href="https://x.com/mdiffatbari"><FontAwesomeIcon className='text-[30px]' icon={faXTwitter} /></a>

                            <a target='_blank' href="https://www.facebook.com/mdiffatbari"><FontAwesomeIcon className='text-[30px]' icon={faSquareFacebook} /></a>
                        </div>
                        <button className="btn bg-[#fd563f] rounded-full px-7">Contact Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;