import Image from 'next/image';
import React from 'react';
import heroBg from "../../images/hero-banner.jpg";
import hero from "../../images/hero.png";
import Fade from 'react-reveal/Fade';
import { getBgBanner, homeBanner } from '../../helper/helper';

const Banner = () => {
    /* const homeBanner = {
        backgroundImage: `url(${heroBg.src})`,
        minHeight: "100vh",
        width: "100%",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat"

    } */

    return (
        <div style={getBgBanner(heroBg)} className=" min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10">
            <Fade left >
                <div className='mt-10 order-2 lg:order-1 flex  justify-start items-center col-span-6'>
                    <div className='flex flex-col mx-5 lg:ml-28 lg:mr-0'>
                        <h1 className='text-2xl lg:text-5xl font-bold '>Commercial & Residential
                            <br />
                            Hot Water Pressure
                            <br />
                            Washing Services .
                        </h1>
                        <button className='btn btn-primary my-5 w-32'>Learn More</button>
                    </div>
                </div>
            </Fade>
            <Fade right>
                <div className='mt-10 order-1 lg:order-2 flex justify-end col-span-4'>
                    <div className=''>
                        <Image src={hero} alt="hero-image" />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Banner;