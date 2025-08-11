import React from 'react';
import SplashCursor from '../../ReactBit-style/SplashCursor'
import "./Home.css"
import Navbar from '../../Component/Navbar/Navbar';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
        <div>
            <SplashCursor />
        </div>
        </>
    );
};

export default Home;