import React from 'react';
import MapBox from '../mapBox/MapBox';

const Contact = () => {
    return (
        <div className='mt-20 container mx-auto'>
            <div>
                <h2 className='text-center'>Contact us</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-10 mt-10">
                <div className="col-span-7 shadow-sm">
                    <MapBox />
                </div>
                <div className="col-span-3 bg-slate-100 border border-slate-300 shadow-sm min-h-32 flex justify-center items-center">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your bio</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" placeholder="Message"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;