import React from 'react';

const Service = ({ service }) => {
    const { title, category, price, duration } = service;
    console.log(service)
    return (
        <div className='p-5 border border-slate-400 shadow-sm'>
            <h4 className="text-lg font-bold text-center text-secondary dark:text-white">{title}</h4>

            <div className='flex space-x-3 mt-3'>
                <h5 className='text-slate-700 dark:text-slate-300 font-medium '>Category : </h5>
                <h6 className='text-slate-700 font-bold '>{category}</h6>
            </div>

            <div className='flex space-x-3'>
                <h5 className='text-slate-700 dark:text-slate-300 font-medium '>Duration : </h5>
                <h6 className='text-slate-700 font-bold '>{duration}Hr</h6>
            </div>

            <div className='flex space-x-3'>
                <h5 className='text-slate-700 dark:text-slate-300 font-medium '>Price : </h5>
                <h6 className='text-slate-700 font-bold '>${price}</h6>
            </div>

        </div>
    );
};

export default Service;