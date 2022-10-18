import React from 'react';
import Head from "next/head";
import NavBar from '../Header/NavBar';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Washing Services</title>
                <link rel="shortcut icon" href="/favicon.svg" />
            </Head>
            <NavBar />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;