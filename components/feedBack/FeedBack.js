import Image from 'next/image';
import React from 'react';
import Fade from "react-reveal/Fade";
import Slider from "react-slick";
import { getBgBanner, sliderSettings } from '../../helper/helper';
import feedBackBg from "../../images/washing-bg.png"

const FeedBack = () => {

    return (
        <div style={getBgBanner(feedBackBg)} className='mt-20 max-h-screen'>
            <div className='container mx-auto'>
                <div className='my-10'>
                    <h2 className='text-center text-secondary'>Customer Reviews</h2>
                    <p className='text-center text-primary font-medium'>Our Customers say about us</p>
                </div>
                <Slider {...sliderSettings}>
                    <div className='border border-slate-300 shadow-sm p-10'>

                        {/* Avatar============== */}

                        <div className='flex items-center space-x-4'>
                            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                                <img src="https://placeimg.com/192/192/people" alt='avatar' />
                            </div>
                            <div>
                                <h3>Your Name</h3>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>

                        {/* Message================ */}
                        <div className='mt-3 font-medium'>
                            <p>Service review message</p>
                        </div>
                    </div>

                    <div className='border border-slate-300 shadow-sm p-10'>

                        {/* Avatar============== */}

                        <div className='flex items-center space-x-4'>
                            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                                <img src="https://placeimg.com/192/192/people" alt='avatar' />
                            </div>
                            <div>
                                <h3>Your Name</h3>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>

                        {/* Message================ */}
                        <div className='mt-3 font-medium'>
                            <p>Service review message</p>
                        </div>
                    </div>
                    <div className='border border-slate-300 shadow-sm p-10'>

                        {/* Avatar============== */}

                        <div className='flex items-center space-x-4'>
                            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                                <img src="https://placeimg.com/192/192/people" alt='avatar' />
                            </div>
                            <div>
                                <h3>Your Name</h3>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>

                        {/* Message================ */}
                        <div className='mt-3 font-medium'>
                            <p>Service review message</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default FeedBack;