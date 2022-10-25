import Image from 'next/image';
import React from 'react';
import about from "../../images/we.jpg"
import car from "../../images/car-banner.jpg"
import Fade from 'react-reveal/Fade'

const About = () => {
    return (
        <div className='container mx-auto mt-10 lg:mt-20'>

            {/* about us ? ================== */}

            <div className='grid grid-col-1 md:grid-col-2 lg:grid-cols-2 gap-10'>
                <Fade top>
                    <div className='relative group lg:order-2'>
                        <Image className='group-hover:scale-105 transition-all duration-500 ease-in-out' src={about} alt="about" />
                        <div className='h-[80%] w-[87%]  absolute top-[10%] left-[7%] border-2 border-primary group-hover:h-full group-hover:w-full group-hover:top-0 group-hover:left-0 transition-all duration-500'></div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-secondary dark:text-white'>
                            Who we are ?
                        </h2>
                        <p className='mt-4 font-medium text-slate-600 dark:text-slate-400'>
                            Pressure washing services is a privately owned, full service pressure washing company providing many of your power washing needs. We offer our services to commercial areas as well as residential.
                            <br />
                            <br />
                            We provide a high - quality and prompt service that will make your home or office shine! We will work with you on a price that fits your budget, and our work is 100% guaranteed. Our trained specialists applies both the art and science of the industry and will safely and effectively clean your property.
                        </p>
                    </div>
                </Fade>
            </div>

            {/* why choose us ?================= */}

            <div className='grid grid-col-1 md:grid-col-2 lg:grid-cols-2 gap-10 mt-10 lg:mt-20'>
                <Fade right>
                    <div className='relative group'>
                        <Image className='group-hover:scale-105 transition-all duration-500 ease-in-out' src={car} alt="about" />
                        <div className='h-[80%] w-[87%]  absolute top-[10%] left-[7%] border-2 border-primary group-hover:h-full group-hover:w-full group-hover:top-0 group-hover:left-0 transition-all duration-500'></div>
                    </div>
                </Fade>
                <Fade left>
                    <div className='flex flex-col justify-center text-slate-700 dark:text-slate-400'>
                        <h2 className='text-secondary dark:text-white'>
                            Why choose us ?
                        </h2>

                        <div className='flex items-center space-x-4 mt-4'>
                            <i className="fa-solid fa-circle-check text-2xl text-primary"></i>
                            <h3>15 Years of Service</h3>
                        </div>
                        <div className='flex items-center space-x-4 mt-2'>
                            <i className="fa-solid fa-circle-check text-2xl text-primary"></i>
                            <h3>On-Time Completion</h3>
                        </div>
                        <div className='flex items-center space-x-4 mt-2'>
                            <i className="fa-solid fa-circle-check text-2xl text-primary"></i>
                            <h3>Free Estimates</h3>
                        </div>
                        <div className='flex items-center space-x-4 mt-2'>
                            <i className="fa-solid fa-circle-check text-2xl text-primary"></i>
                            <h3>Licensed & Insured</h3>
                        </div>
                        <div className='flex items-center space-x-4 mt-2'>
                            <i className="fa-solid fa-circle-check text-2xl text-primary"></i>
                            <h3>Professional & Experienced Staff</h3>
                        </div>
                        <div className='flex items-center space-x-4 mt-2'>
                            <i className="fa-solid fa-circle-check text-2xl text-primary"></i>
                            <h3>High-Quality & Reliable Service</h3>
                        </div>

                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default About;