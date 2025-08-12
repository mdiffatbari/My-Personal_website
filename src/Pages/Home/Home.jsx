import React from 'react';
import SplashCursor from '../../ReactBit-style/SplashCursor'
import "./Home.css"
import Navbar from '../../Component/Navbar/Navbar';
import Banner from '../../Component/Banner/Banner';
import About from '../../Component/About/About';
import Skills from '../../Component/Skills/Skills';
import Footer from '../../Component/Footer/Footer';
import Education from '../../Component/Education/Education';
import Contact from '../../Component/Contact/Contact';
import Project from '../../Component/Project/Project';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className=''>
                <SplashCursor />

                <Banner></Banner>
                <About></About>
                <Skills></Skills>
                <Education></Education>
                <Project></Project>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Home;