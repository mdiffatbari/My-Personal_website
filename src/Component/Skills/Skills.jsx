import React from 'react';
import { faBootstrap, faCss3Alt, faHtml5, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";
import { DiIllustrator } from "react-icons/di";
import { DiPhotoshop } from "react-icons/di";


const Skills = () => {
    return (
        <div id="skills" className='py-7 md:py-32 w-11/12 mx-auto'>
            <h1 className='mb-5 md:mb-10 text-2xl md:text-4xl font-heading-font text-center'>My <span className='text-[#fd563f]'>Skills</span></h1>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>

                <div className='bg-white/10 backdrop-blur-md border border-white/20 p-9 text-center rounded-2xl'>
                    <FontAwesomeIcon icon={faHtml5} className='text-8xl' />
                    <h1 className='font-heading-font font-bold text-2xl'>Html5</h1>
                </div>
                <div className='bg-white/10 backdrop-blur-md border border-white/20 p-9 text-center rounded-2xl'>
                    <FontAwesomeIcon icon={faCss3Alt} className='text-8xl' />
                    <h1 className='font-heading-font font-bold text-2xl'>CSS</h1>
                </div>
                <div className='bg-white/10 backdrop-blur-md border border-white/20 p-9 text-center rounded-2xl'>
                    <FontAwesomeIcon icon={faSquareGithub} className='text-8xl' />
                    <h1 className='font-heading-font font-bold text-2xl'>Git</h1>
                </div>
                <div className='bg-white/10 backdrop-blur-md border border-white/20 p-9 text-center rounded-2xl'>
                    <FontAwesomeIcon icon={faBootstrap} className='text-8xl' />
                    <h1 className='font-heading-font font-bold text-2xl'>BootStrap</h1>
                </div>
                <div className='bg-white/10 backdrop-blur-md border border-white/20 p-9 text-center rounded-2xl'>
                    <RiTailwindCssFill className='mx-auto' size={100}/>
                    <h1 className='font-heading-font font-bold text-2xl'>TailwindCSS</h1>
                </div>
                <div className='bg-white/10 backdrop-blur-md border border-white/20 p-9 text-center rounded-2xl'>
                    <IoLogoJavascript className='mx-auto' size={100}/>
                    <h1 className='font-heading-font font-bold text-2xl'>JavaScript</h1>
                </div>
                <div className='bg-white/10 backdrop-blur-md border border-white/20 p-9 text-center rounded-2xl'>
                    <FaReact className='mx-auto' size={100}/>
                    <h1 className='font-heading-font font-bold text-2xl'>React</h1>
                </div>
                <div className='bg-white/10 backdrop-blur-md border border-white/20 p-9 text-center rounded-2xl'>
                    <DiMongodb className='mx-auto' size={100}/>
                    <h1 className='font-heading-font font-bold text-2xl'>MongoDB</h1>
                </div>


            </div>

            <div className='mt-9 text-center'>
                <h1 className='text-2xl md:text-4xl font-heading-font text-center mb-6'>Tools</h1>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>

                    <div className='bg-white/10 backdrop-blur-md border border-white/20 p-9 text-center rounded-2xl'>
                    <VscVscode className='mx-auto' size={100}/>
                    <h1 className='font-heading-font font-bold text-2xl'>Vs Code</h1>
                    </div>
                    <div className='bg-white/10 backdrop-blur-md border border-white/20 p-9 text-center rounded-2xl'>
                    <FaFigma className='mx-auto' size={100}/>
                    <h1 className='font-heading-font font-bold text-2xl'>Figma</h1>
                    </div>
                    <div className='bg-white/10 backdrop-blur-md border border-white/20 p-9 text-center rounded-2xl'>
                    <DiIllustrator className='mx-auto' size={100}/>
                    <h1 className='font-heading-font font-bold text-2xl'>Illustrator</h1>
                    </div>
                    <div className='bg-white/10 backdrop-blur-md border border-white/20 p-9 text-center rounded-2xl'>
                    <DiPhotoshop className='mx-auto' size={100}/>
                    <h1 className='font-heading-font font-bold text-2xl'>Photoshop</h1>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Skills;