import React from 'react';
import project1 from "../../assets/projects/projects (1).png"
import project2 from "../../assets/projects/projects (2).png"
import project3 from "../../assets/projects/projects (3).png"
import project4 from "../../assets/projects/projects (4).png"

const Project = () => {
    return (
        <div id='projects' className='py-7 md:py-32 w-11/12 mx-auto'>
            <h1 className='mb-5 md:mb-10 text-2xl md:text-4xl font-heading-font text-center'>My latest <span className='text-[#fd563f]'>Projects</span></h1>

            <div className='md:flex items-center gap-10 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl my-3'>
                <div>
                    <img className='md:w-2xl rounded-2xl' src={project3} alt="" />
                </div>
                <div className='md:max-w-[40%]'>
                    <h1 className='text-2xl py-3 font-bold mb-2'>Project Name: <span className='text-[#fd563f]'>Hotel Star</span></h1>
                    <p> Hotel-Star is a modern hotel room booking platform designed to make finding and reserving accommodations fast, simple, and reliably. It connects travelers with a wide range of hotels, offering detailed room information, real-time availability, and a seamless booking experience.</p>
                    <div className='md:flex gap-2 py-5'>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">Html</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">Tailwind Css</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">Javascript</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">React</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">DaisyUi</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">Firebase</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">MongoDB</button>
                    </div>
                    <a target='_blank' href="https://hotel-star-ee81a.web.app/"><button className="btn btn-active btn-lg bg-[#fd563f] rounded-full">Live View</button></a>
                </div>
            </div>

            <div className='md:flex items-center gap-10 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl my-3'>
                <div>
                    <img className='md:w-2xl rounded-2xl' src={project4} alt="" />
                </div>
                <div className='md:max-w-[40%]'>
                    <h1 className='text-2xl py-3 font-bold mb-2'>Project Name: <span className='text-[#fd563f]'>Edumanage</span></h1>
                    <p>About This Website <br /> <br />
                        This platform is an online class management and learning support system designed to connect teachers and students in a collaborative digital environment.
                        <br /> <br />
                        Purpose
                        It allows students to enroll in classes and view all their assigned coursework in one place. Teachers can create, manage, and evaluate assignments efficiently. The system includes Teaching Evaluation Reports (TER) so students can rate and give feedback to teachers for quality improvement. It is designed to deliver a responsive, user-friendly experience across both desktop and mobile devices.
                        <br /> <br />
                        Key Features
                        The platform includes a student dashboard to view enrolled classes and assignments. It offers a responsive design with a table view for large screens and a card view for mobile devices. Students can submit assignments directly through the platform, while the teaching evaluation system allows them to rate teachers and provide feedback. Real-time notifications, powered by SweetAlert, ensure instant submission feedback.</p>
                    <div className='md:flex gap-2 py-5'>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">Html</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">Tailwind Css</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">Javascript</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">React</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">DaisyUi</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">Firebase</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">MongoDB</button>
                    </div>
                    <a target='_blank' href="https://edumanage-3629e.web.app/"><button className="btn btn-active btn-lg bg-[#fd563f] rounded-full">Live View</button></a>
                </div>
            </div>

            <div className='md:flex items-center gap-10 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl my-3'>
                <div>
                    <img className='md:w-2xl rounded-2xl' src={project2} alt="" />
                </div>
                <div className='md:max-w-[40%]'>
                    <h1 className='text-2xl py-3 font-bold mb-2'>Project Name: <span className='text-[#fd563f]'>Tech Nest</span></h1>
                    <p>Tech Nest is a monthly gateway to the latest and most exciting gadgets, tools, and tech accessories — delivered straight to your doorstep. We believe technology should be fun, inspiring, and easy to explore. That’s why every Tech Nest box is carefully curated with innovative products, from smart home devices and computer accessories to creative tech toys and lifestyle gadgets.

                        <br /><br />

                        Whether a tech enthusiast, a gamer, or just someone who loves discovering new things, Tech Nest is here to surprise you with fresh, useful, and unique finds every month. Think of it as your personal treasure chest for all things tech — unbox, explore, and enjoy.</p>
                    <div className='md:flex gap-2 py-5'>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">Html</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">Tailwind Css</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">Javascript</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">React</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">DaisyUi</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">Firebase</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">MongoDB</button>
                    </div>
                    <a target='_blank' href="https://technest01.netlify.app/"><button className="btn btn-active btn-lg bg-[#fd563f] rounded-full">Live View</button></a>
                </div>
            </div>

            <div className='md:flex items-center gap-10 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl my-3'>
                <div>
                    <img className='md:w-2xl rounded-2xl' src={project1} alt="" />
                </div>
                <div className='md:max-w-[40%]'>
                    <h1 className='text-2xl py-3 font-bold mb-2'>Project Name: <span className='text-[#fd563f]'>Phudu</span></h1>
                    <p>Phudu is a smart, easy-to-use platform that helps you find and book appointments with trusted doctors in just a few clicks. Whether you need a routine check-up, a specialist consultation, or urgent medical advice, Phudu connects you with qualified healthcare professionals based on your location, availability, and needs.
                        <br /><br />
                        No more long phone calls or waiting in line — with Phudu, you can search, compare, and confirm your appointment anytime, anywhere. Our goal is to make healthcare more accessible, convenient, and stress-free for everyone.</p>
                    <div className='md:flex gap-2 py-5'>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">Html</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">Tailwind Css</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">Javascript</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">React</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">DaisyUi</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">Firebase</button>
                        <button className="btn btn-sm btn-active rounded-3xl bg-white text-[#fd563f] ">MongoDB</button>
                    </div>
                    <a target='_blank' href="https://phudu-assignment-8-mdiffatbari.netlify.app/"><button className="btn btn-active btn-lg bg-[#fd563f] rounded-full">Live View</button></a>
                </div>
            </div>



        </div>
    );
};

export default Project;