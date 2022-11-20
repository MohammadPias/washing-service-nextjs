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
import SwitchTheme from '../../utils/switchTheme';
import EditUserModel from '../ModelShow/EditUserModel';

const menus = [
    { name: "Bookings", url: "/dashboard/admin/bookings", icon: "fa-solid fa-receipt" },
    { name: "Services", url: "/dashboard/admin/services", icon: "fa-brands fa-servicestack" },
    { name: "Event", url: "/dashboard/admin/event", icon: "fa-solid fa-calendar-days" },
    { name: "Users", url: `/dashboard/admin/users?page=${0}&limit=${5}`, icon: "fa-solid fa-user-group" },
]

const DashboardLayout = ({
    title,
    description,
    children,
    page,
    perPageUser,
    setSearchText }) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [mounted, setMounted] = useState(false);

    const { modal } = useSelector(state => state.user)


    const router = useRouter();
    const path = router.asPath;

    const matchPath = menus?.find(item => router.asPath.includes(item?.url) === true)
    const [activeNav, setActiveNav] = useState(matchPath?.name || "Bookings");

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
        { name: "Log Out", link: `/signin?redirect=${path}` },
    ]


    const handleSearchChange = (searchText) => {
        setSearchText(searchText)
        router.replace(`/dashboard/admin/users?page=${page}&limit=${perPageUser}&search=${searchText}`)
    }

    return (
        <div className='overflow-hidden'>
            <Head>
                <title>{title ? title + " - Pressure Washing Services" : "Washing Services"}</title>
                <meta name="description" content={description} />
                <link rel="shortcut icon" href="/favicon.svg" />
            </Head >
            <div style={darkMode === "dark" ? bgDarkStyle : bgLightStyle} className=" h-screen">
                {
                    modal?.isModalOpen &&
                    <EditUserModel
                        user={modal?.payload}
                    />
                }
                <div className='lg:container mx-auto grid grid-cols-1 lg:grid-cols-12'>


                    {/* Side bar=============== */}
                    <div className='lg:col-span-3 lg:h-screen pt-2 lg:p-5 bg-white shadow-sm dark:bg-secondary'>
                        <div className='grid grid-cols-8 lg:w-full lg:my-3 px-3 border-b border-slate-400 lg:border-none'>

                            {/* Sidebar Log0=========================== */}

                            <div className='col-span-6 lg:col-span-7 flex items-center'>
                                {darkMode === "dark" ?
                                    <Link href="/">
                                        <a>
                                            <Image className='cursor-pointer' alt='logo' src={lightLogo} />
                                        </a>
                                    </Link>
                                    :
                                    <Link href="/">
                                        <a>
                                            <Image className='cursor-pointer' alt='logo' src={darkLogo} />
                                        </a>
                                    </Link>

                                }
                            </div>

                            <div
                                onClick={handleSidebarShow}
                                className='lg:hidden h-8 w-8 rounded-full border-2 border-slate-700 flex justify-center items-center ml-auto my-5 col-span-2 lg:col-span-1'>
                                <i className="fa-solid fa-bars"></i>
                            </div>
                        </div>

                        {/* Sidebar Menus=========================== */}
                        <div className={`mt-16 absolute ${showSidebar ? 'left-0 top-20' : '-left-full top-20'} lg:static z-10 lg:bg-white dark:bg-secondary w-full transition-all duration-1000`}>
                            <ul>
                                {
                                    menus.map(item =>
                                        <Link key={item.name} href={item.url} >
                                            <a>
                                                <li
                                                    onClick={() => setActiveNav(item.name)}
                                                    className={`nav-link ${item.name === activeNav && "bg-red-50 dark:bg-secondary-light text-primary shadow-sm"} hover:bg-red-50 dark:hover:bg-secondary-light rounded-md`}>
                                                    <div>
                                                        <i className={item.icon} />
                                                    </div>
                                                    <span>{item.name}</span>
                                                </li>
                                            </a>
                                        </Link>
                                    )
                                }
                            </ul>
                        </div>
                    </div>


                    <div className='lg:col-span-9 flex flex-col justify-between'>

                        {/* header=============== */}

                        <div className='bg-white dark:bg-secondary shadow-sm'>
                            <div className='h-20 px-8 flex justify-between items-center'>

                                {/* Search bar=============== */}
                                <input
                                    onChange={(e) => handleSearchChange(e.target.value)}
                                    type="text"
                                    placeholder={`Search ${title}`}
                                    className="input input-bordered h-10 text-center max-w-xs dark:bg-secondary-light "
                                />
                                {
                                    <SwitchTheme />
                                }
                                {/* Avatar=================== */}
                                <div className='flex items-center space-x-3'>
                                    <p>{info?.name}</p>
                                    <Avatar menus={navMenus} />
                                </div>
                            </div>
                        </div>


                        {/* Content=============== */}
                        <div className=' mt-6 lg:ml-6 shadow-sm rounded-lg h-screen overflow-y-auto'>
                            {children}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
