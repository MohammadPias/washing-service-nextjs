import Image from 'next/image';
import React from 'react';
import logo from "../../images/logo-light.svg"

const Footer = () => {
    return (
        <div className='bg-secondary'>
            <footer className="footer p-10 text-slate-300">
                <div>
                    <Image width="200" height="60" src={logo} alt="logo" />
                    <p>Providing reliable services since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Residential</a>
                    <a className="link link-hover">Commercial</a>
                    <a className="link link-hover">Industrial</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <div className='text-center text-slate-300 border-t border-t-slate-400 py-4'>
                <p>Copyright © {new Date().getFullYear()}- All right reserved by Pressure Washing Services.</p>
            </div>
        </div>
    )
};

export default Footer;