import React from 'react';
import Fade from "react-reveal/Fade";
import Slider from "react-slick";
import Slide1 from "../../images/pool-cleaning.jpg";
import Slide2 from "../../images/driveway-cleaning.jpg";
import Slide3 from "../../images/deck-cleaning.jpg";
import Slide4 from "../../images/driveway-cleaning.jpg";
import Slide5 from "../../images/house-cleaning.jpg";
import Image from 'next/image';

const CompletedWork = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='container mx-auto'>
            <div className='text-center my-10'>
                <h2 className='text-secondary'>Recent Completed Work</h2>
                <p className='text-primary font-medium'>Deck cleaning | Driveway cleaning | House Cleaning</p>
            </div>
            <Fade left>
                <Slider {...settings}>
                    <div>
                        <Image src={Slide1} alt="slider" />
                    </div>
                    <div>
                        <Image src={Slide2} alt="slider" />
                    </div>
                    <div>
                        <Image src={Slide3} alt="slider" />
                    </div>
                    <div>
                        <Image src={Slide4} alt="slider" />
                    </div>
                    <div>
                        <Image src={Slide5} alt="slider" />
                    </div>
                </Slider>
            </Fade>
        </div>
    );
};

export default CompletedWork;