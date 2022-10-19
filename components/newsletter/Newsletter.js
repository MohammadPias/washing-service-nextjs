import React from 'react';
import { getBgBanner } from '../../helper/helper';
import newsBg from "../../images/newsletter.jpg"

const Newsletter = () => {
    return (
        <div style={getBgBanner(newsBg)} className="h-[200px] lg:h-[400px] grid grid-cols-1 lg:grid-cols-2 mt-20">
            <div className='flex justify-center items-center'>
                <div>
                    <h2 className='text-center text-white'>GET UPDATE</h2>
                    <p className='text-center font-medium text-slate-200'>Subscribe our newsletter and get discount 30% off</p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <input className='h-12 w-1/2 focus:outline-zinc-500 text-center' type="text" placeholder='Enter your email' />
                {/* <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}
                <button className='btn btn-primary'>Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;