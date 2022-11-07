import React, { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import logo from "../../images/logo-dark.svg"
import logoLight from "../../images/logo-light.svg";
import NextLink from "next/link";
import { CheckTheme } from '../../utils/helper';
import Avatar from '../avatar/Avatar';
import { Store } from '../../utils/Store';
import { useSelector } from 'react-redux';


const menus = [
    { name: "Log Out", link: "" },
    { name: "Dashboard", link: "/dashboard" },
    { name: "Switch Theme", link: "", icon: "themeIcon" },
]


const NavBar = () => {
    const [navBorder, setNavBorder] = useState('border-none');
    const [navColor, setNavColor] = useState("transparent");
    const [mounted, setMounted] = useState(false);

    const darkMode = CheckTheme();
    const { state } = useContext(Store);
    const { user } = state;
    const { info } = useSelector(state => state.user)

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

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className={`navbar ${navColor} dark:text-white  fixed top-0 z-50 ${navBorder}`}>
            <div className='w-full lg:container lg:mx-auto'>
                <div className="flex items-center lg:h-20 navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} className="btn btn-ghost lg:hidden">
                            {
                                info?.avatar ?
                                    <Image src={info?.avatar} alt="avatar" />
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            }
                        </div>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-5 dark:text-white">
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Services</a></li>
                            <li><a href='#'>About Us</a></li>
                            <li><a href='#'>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='lg:w-4/6'>
                        {darkMode === 'dark' ?
                            <Image src={logoLight} alt="logo" />
                            :
                            <Image src={logo} alt="logo" />
                        }
                    </div>
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
                    {
                        info?.name &&
                        <p>{info?.name}</p>
                    }
                    {
                        info &&
                        <Avatar menus={menus} />
                    }
                    {
                        !info?.email &&
                        <NextLink href="/signin">
                            <a className="btn btn-primary">Sign In</a>
                        </NextLink>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;