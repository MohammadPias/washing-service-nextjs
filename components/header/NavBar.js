import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from "../../images/logo-dark.svg"
import logoLight from "../../images/logo-light.svg"

const NavBar = () => {
    const [navBorder, setNavBorder] = useState('border-none');
    const [navColor, setNavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 100 ? setNavColor("bg-white") : setNavColor("bg-transparent");
        window.scrollY > 100 ? setNavBorder("border-b border-slate-300 shadow-sm") : setNavBorder('border-none');
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <div className={`navbar ${navColor}  fixed top-0 z-50 ${navBorder}`}>
            <div className='w-full lg:container lg:mx-auto'>
                <div className="flex items-center lg:h-20 navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Services</a></li>
                            <li><a>About Us</a></li>
                            <li><a>Contact Us</a></li>
                        </ul>
                    </div>
                    <a className="">
                        <div className='lg:w-4/5'>
                            <Image src={logo} alt="logo" />
                            {/* <Image src={logoLight} alt="logo" /> */}
                        </div>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Home</a></li>
                        <li><a>Services</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
                <div className=" ml-auto">
                    <a className="btn btn-primary">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;