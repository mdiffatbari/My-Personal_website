import React from 'react';
import SplashCursor from '../../ReactBit-style/SplashCursor'
import "./Home.css"
import Navbar from '../../Component/Navbar/Navbar';
import Banner from '../../Component/Banner/Banner';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto'>
                <SplashCursor />

            <Banner></Banner>

            {/* ==================================About ME================================================== */}
            <div className='py-7 md:py-32'>
                <h1 className='text-2xl md:text-4xl font-heading-font text-center'>About <span className='text-[#fd563f]'>Me</span></h1>
            </div>
            {/* ==================================About ME End================================================== */}


            </div>
        </>
    );
};

export default Home;