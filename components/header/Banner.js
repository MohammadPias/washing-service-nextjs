import Image from 'next/image';
import React from 'react';
import heroBg from "../../images/hero-banner.jpg";
import heroBgDark from "../../images/hero-banner-dark.jpg";
import hero from "../../images/man-gun-dark.png";
import hero2 from "../../images/man-gun-light.png";
import Fade from 'react-reveal/Fade';
import { CheckTheme, getBgBanner } from '../../utils/helper';

const Banner = () => {
    const darkMode = CheckTheme()

    return (
        <div style={darkMode === "dark" ? getBgBanner(heroBgDark) : getBgBanner(heroBg)} className="min-h-screen flex items-center">
            <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10">
                <div className='mt-24 order-2 lg:order-1 flex  justify-start items-center col-span-6'>
                    <Fade left >
                        <div className='flex flex-col'>
                            <h1 className='text-2xl lg:text-5xl font-bold '>Commercial & Residential
                                <br />
                                Hot Water Pressure
                                <br />
                                Washing Services .
                            </h1>
                            <button className='btn btn-primary my-5 w-32'>Learn More</button>
                        </div>
                    </Fade>
                </div>
                <Fade right>
                    <div className='mt-24 order-1 lg:order-2 flex justify-start items-center col-span-4'>
                        <div className=''>
                            {
                                darkMode === "dark" ?
                                    <Image src={hero} alt="hero-image" />
                                    :
                                    <Image src={hero2} alt="hero-image" />
                            }
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Banner;