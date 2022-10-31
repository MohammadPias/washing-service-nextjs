import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from "../../images/logo-dark.svg"
import logoLight from "../../images/logo-light.svg";
import NextLink from "next/link";
import { CheckTheme } from '../../helper/helper';
import Avatar from '../avatar/Avatar';

const NavBar = () => {
    const [navBorder, setNavBorder] = useState('border-none');
    const [navColor, setNavColor] = useState("transparent");

    const darkMode = CheckTheme();

    const listenScrollEvent = () => {
        window.scrollY > 100 ? setNavColor(`${darkMode === "dark" ? "bg-accent" : 'bg-white'}`) : setNavColor("bg-transparent");
        window.scrollY > 100 ? setNavBorder("border-b border-slate-300 shadow-sm") : setNavBorder('border-none');
    };


    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, [darkMode]);

    const menus = [
        { name: "Sign Out", link: "/" },
        { name: "Dashboard", link: "/dashboard" },
        { name: "Switch Theme", link: "", icon: "themeIcon" },
    ]

    return (
        <div className={`navbar ${navColor} dark:text-white  fixed top-0 z-50 ${navBorder}`}>
            <div className='w-full lg:container lg:mx-auto'>
                <div className="flex items-center lg:h-20 navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-5 dark:text-white">
                            <li><a>Home</a></li>
                            <li><a>Services</a></li>
                            <li><a>About Us</a></li>
                            <li><a>Contact Us</a></li>
                        </ul>
                    </div>
                    <a className="">
                        <div className='lg:w-4/6'>
                            {darkMode === 'dark' ?
                                <Image src={logoLight} alt="logo" />
                                :
                                <Image src={logo} alt="logo" />
                            }
                        </div>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><NextLink href="/"><a>Home</a></NextLink></li>
                        <li><NextLink href="/services"><a>Services</a></NextLink> </li>
                        <li><NextLink href="/about"><a>About Us</a></NextLink></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
                <div className=" ml-auto flex items-center space-x-3">
                    {/* <SwitchTheme /> */}
                    <Avatar menus={menus} />
                    <NextLink href="/signup">
                        <a className="btn btn-primary">Sign Up</a>
                    </NextLink>
                </div>
            </div>
        </div>
    );
};

export default NavBar;