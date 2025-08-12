import React from 'react';
import logo from "../../assets/logo/fav (3).png"

const Navbar = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto rounded-full bg-white/10 backdrop-blur-md border border-white/20 mt-5 px-3'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu text-4xl menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><a>Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#education">Education</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <img className='w-[100px]' src={logo} alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu text-[18px] font-sm menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn bg-[#fd563f] rounded-4xl">Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;