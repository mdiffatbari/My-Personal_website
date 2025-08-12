import React from 'react';
import contactBg from "../../assets/contact.png"
import { faSquareFacebook, faSquareGithub, faSquareLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
    return (
        <div id='contact' className='w-11/12 mx-auto py-20'>
            <h1 className='text-2xl md:text-4xl font-heading-font text-center mb-6'>Contact Me</h1>

            <div className='flex items-center justify-center justify-between'>
                <div className='hidden md:block'>
                    <img className='md:w-[500px]' src={contactBg} alt="" />
                </div>
                <div>
                    <div className='bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl md:w-2xl mx-auto'>

                        <div className='rounded p-5'>
                            <h1 className='font-bold'>Email:</h1>
                            <h1 className=''>iffatbaribappy1999@gmail.com</h1>
                        </div>
                        <div className='rounded p-5'>
                            <h1 className='font-bold'>Phone:</h1>
                            <h1 className=''>+88 1764845400</h1>
                        </div>
                        <div className='rounded p-5'>
                            <h1 className='font-bold mb-2'>Others:</h1>
                            <a target='_blank' href="https://www.linkedin.com/in/mdiffatbari/"><FontAwesomeIcon className='text-[30px]' icon={faSquareLinkedin} /></a>
                            <a target='_blank' href="https://github.com/mdiffatbari"><FontAwesomeIcon className='text-[30px]' icon={faSquareGithub} /></a>
                            <a target='_blank' href="https://x.com/mdiffatbari"><FontAwesomeIcon className='text-[30px]' icon={faXTwitter} /></a>
                            <a target='_blank' href="https://www.facebook.com/mdiffatbari"><FontAwesomeIcon className='text-[30px]' icon={faSquareFacebook} /></a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;