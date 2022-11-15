import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from "../../images/logo-dark.svg"
import logoLight from "../../images/logo-light.svg";
import NextLink from "next/link";
import { CheckTheme } from '../../utils/helper';
import Avatar from '../avatar/Avatar';
import { useSelector } from 'react-redux';
import SwitchTheme from '../../utils/switchTheme';
import { useRouter } from 'next/router';





const NavBar = () => {
    const [navBorder, setNavBorder] = useState('border-none');
    const [navColor, setNavColor] = useState("transparent");
    const [mounted, setMounted] = useState(false);

    const router = useRouter();
    const path = router.asPath;

    const darkMode = CheckTheme();
    const { info } = useSelector(state => state.user)

    const listenScrollEvent = () => {
        window.scrollY > 100 ? setNavColor(`${darkMode === "dark" ? "bg-accent" : 'bg-white'}`) : setNavColor("bg-transparent");
        window.scrollY > 100 ? setNavBorder("border-b border-slate-300 dark:border-slate-600 shadow-sm") : setNavBorder('border-none');
    };
    // console.log(info)
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, [darkMode]);

    const menus = [
        { name: "Dashboard", link: "/dashboard" },
        { name: "Log Out", link: `/signin?redirect=${path}` },
        // { name: "Switch Theme", link: "", icon: "themeIcon" },
    ]

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
                        <ul tabIndex={0} className="w-max menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-lg dark:bg-secondary dark:text-white">
                            <li><NextLink href="/"><a>Home</a></NextLink></li>
                            <li><NextLink href="/services"><a>Services</a></NextLink> </li>
                            <li><NextLink href="/about"><a>About Us</a></NextLink></li>
                            <li><a>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='lg:w-3/5'>
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
                    {/* {
                        info?.name &&
                        <p>{info?.name}</p>
                    } */}
                    <SwitchTheme />
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