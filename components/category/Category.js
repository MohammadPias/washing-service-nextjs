import React from 'react';
import Slider from "react-slick";
import slide1 from "../../images/commercial.jpg"
import slide2 from "../../images/industrial.jpg"
import slide3 from "../../images/domestic.jpg"
import Image from 'next/image';
import Fade from 'react-reveal/Fade';

const Category = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };


    return (
        <div className='container mx-auto mt-10'>
            <div className='text-center'>
                <h2 className='text-secondary dark:text-white'>Package Catalog</h2>
                <p className='text-primary font-medium mt-2'>Domestic | Commercial | Industrial <br /> Washing Services</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-12 mt-10'>
                <Slider {...settings} className="lg:col-span-7">
                    <div>
                        <Image src={slide3} alt="Industrial service" />
                    </div>
                    <div>
                        <Image src={slide2} alt="Domestic service" />
                    </div>
                    <div>
                        <Image src={slide1} alt="Commercial service" />
                    </div>
                </Slider>
                {/* <Fade left>
                </Fade> */}
                <div className='lg:col-span-3 flex flex-col justify-center'>
                    <Fade top>
                        <div className='flex items-center space-x-5 justify-center border border-slate-400 py-4 rounded-md mb-5 hover:shadow-lg dark:shadow-black transition-all duration-500 cursor-pointer'>
                            <i className="fa-solid fa-house-chimney"></i>
                            <h5>Domestic</h5>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className='flex items-center space-x-5 justify-center border border-slate-400 py-4 rounded-md mb-5 hover:shadow-lg dark:shadow-black transition-all duration-500 cursor-pointer'>
                            <i className="fa-solid fa-industry"></i>
                            <h5>Industrial</h5>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className='flex items-center space-x-5 justify-center border border-slate-400 py-4 rounded-md mb-5 hover:shadow-lg dark:shadow-black transition-all duration-500 cursor-pointer'>
                            <i className="fa-solid fa-briefcase"></i>
                            <h5>Commercial</h5>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Category;