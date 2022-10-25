import React from 'react';
import Head from "next/head";
import NavBar from '../Header/NavBar';
import Footer from '../footer/Footer';

const Layout = ({ title, description, children }) => {
    return (
        <div>
            <Head>
                <title>{title ? title - washing - service : "Washing Services"}</title>
                <meta name="description" content={description} />
                <link rel="shortcut icon" href="/favicon.svg" />
                <script defer src="https://kit.fontawesome.com/441504c5bc.js" crossorigin="anonymous"></script>
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