import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import Avatar from '../avatar/Avatar';
import darkLogo from "../../images/logo-dark.svg";
import lightLogo from "../../images/logo-light.svg";
import { bgDarkStyle, bgLightStyle, CheckTheme } from '../../utils/helper';

const menus = [
    { name: "Bookings", url: "/dashboard/bookings", icon: "fa-solid fa-receipt" },
    { name: "Services", url: "/dashboard/services", icon: "fa-brands fa-servicestack" },
    { name: "Event", url: "/dashboard/event", icon: "fa-solid fa-calendar-days" },
    { name: "Users", url: "/dashboard/users", icon: "fa-solid fa-user-group" },
]

const DashboardLayout = ({ title, description, children }) => {
    const router = useRouter();
    const matchPath = menus?.find(item => item.url === router.asPath)
    const [showSidebar, setShowSidebar] = useState(false);
    const [activeNav, setActiveNav] = useState(matchPath?.name);
    const [mounted, setMounted] = useState(false);


    const darkMode = CheckTheme();
    const { info } = useSelector(state => state.user);

    const handleSidebarShow = () => {
        setShowSidebar(change => setShowSidebar(!change))
    }

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;


    const navMenus = [
        { name: "Switch Theme", link: "/", icon: "themeIcon" },
        { name: "Log Out", link: "/" },
    ]

    return (
        <div className='overflow-hidden'>
            <Head>
                <title>{title ? title + " - Pressure Washing Services" : "Washing Services"}</title>
                <meta name="description" content={description} />
                <link rel="shortcut icon" href="/favicon.svg" />
            </Head >
            <div style={darkMode === "dark" ? bgDarkStyle : bgLightStyle} className=" h-screen">
                <div className='lg:container mx-auto grid grid-cols-1 lg:grid-cols-12'>


                    {/* Side bar=============== */}
                    <div className='lg:col-span-3 lg:h-screen pt-2 lg:p-5 bg-white shadow-sm dark:bg-secondary'>
                        <div className='grid grid-cols-8 lg:w-full lg:my-3 px-3 border-b border-slate-400 lg:border-none'>
                            <div className='col-span-6 lg:col-span-7 flex items-center'>
                                {darkMode === "dark" ?
                                    <Link href="/" passHref><Image className='cursor-pointer' alt='logo' src={lightLogo} /></Link>
                                    :
                                    <Link href="/" passHref><Image className='cursor-pointer' alt='logo' src={darkLogo} /></Link>

                                }
                            </div>

                            <div
                                onClick={handleSidebarShow}
                                className='lg:hidden h-8 w-8 rounded-full border-2 border-slate-700 flex justify-center items-center ml-auto my-5 col-span-2 lg:col-span-1'>
                                <i className="fa-solid fa-bars"></i>
                            </div>
                        </div>
                        <div className={`mt-16 absolute ${showSidebar ? 'left-0 top-20' : '-left-full top-20'} lg:static z-10 lg:bg-white dark:bg-secondary w-full transition-all duration-1000`}>
                            <ul>
                                {
                                    menus.map(item =>
                                        <Link key={item.name} href={item.url} passHref>
                                            <li
                                                onClick={() => setActiveNav(item.name)}
                                                className={`nav-link ${item.name === activeNav && "bg-red-50 dark:bg-secondary-light text-primary shadow-sm"} hover:bg-red-50 dark:hover:bg-secondary-light rounded-md`}>
                                                <div>
                                                    <i className={item.icon} />
                                                </div>
                                                <span>{item.name}</span>
                                            </li>
                                        </Link>
                                    )
                                }
                            </ul>
                        </div>
                    </div>


                    <div className='lg:col-span-9 flex flex-col'>

                        {/* header=============== */}

                        <div className='bg-white dark:bg-secondary shadow-sm'>
                            <div className='h-20 px-8 flex justify-between items-center'>

                                {/* Search bar=============== */}
                                <input type="text" placeholder={`Search ${title}`} className="input input-bordered h-10 text-center max-w-xs dark:bg-secondary-light " />

                                {/* Avatar=================== */}
                                <div className='flex items-center space-x-3'>
                                    <p>{info?.name}</p>
                                    <Avatar menus={navMenus} />
                                </div>
                            </div>
                        </div>


                        {/* Content=============== */}
                        <div className='grow p-3 mt-6 lg:ml-6 shadow-sm rounded-lg h-screen overflow-y-auto overflow-hidden'>
                            {children}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
