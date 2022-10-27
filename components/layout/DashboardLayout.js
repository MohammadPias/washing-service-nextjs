import React from 'react';
import Head from 'next/head';
import { bgDarkStyle, bgLightStyle, CheckTheme } from '../../helper/helper';

const DashboardLayout = ({ title, description, children }) => {
    const darkMode = CheckTheme();
    return (
        <div>
            <Head>
                <title>{title ? title + " - Pressure Washing Services" : "Washing Services"}</title>
                <meta name="description" content={description} />
                <link rel="shortcut icon" href="/favicon.svg" />
                <script defer src="https://kit.fontawesome.com/441504c5bc.js" crossOrigin="anonymous"></script>
            </Head >
            <div style={darkMode === "dark" ? bgDarkStyle : bgLightStyle} className=" h-screen">
                <div className='lg:container mx-auto grid grid-cols-1 lg:grid-cols-12'>
                    <div className='lg:col-span-3 shadow-md dark:shadow-slate-700 lg:h-screen p-5'>
                        <h3>Side bar</h3>
                    </div>
                    <div className='lg:col-span-9 flex flex-col'>
                        <div className='h-16'>
                            <h3>header</h3>
                        </div>
                        <div className=''>
                            <h3>Content</h3>
                        </div>

                    </div>
                </div>

                {/* {children} */}
            </div>
        </div>
    );
};

export default DashboardLayout;
