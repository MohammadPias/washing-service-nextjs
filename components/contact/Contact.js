import React from 'react';
import MapBox from '../mapBox/MapBox';
import Fade from "react-reveal/Fade";
import { useForm, Controller } from "react-hook-form";
import { bgDarkStyle, bgLightStyle, CheckTheme } from '../../utils/helper';

const Contact = () => {
    const { control, handleSubmit } = useForm();
    const darkMode = CheckTheme()

    const onSubmit = (data) => {
        console.log(data)
        // alert(JSON.stringify(data));
    };
    return (
        <div className='py-20 container mx-auto'>
            <div>
                <h2 className='text-center'>Contact us</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-10 mt-10">
                <Fade left>
                    <div className="col-span-7 shadow-sm">
                        <MapBox />
                    </div>
                </Fade>

                <Fade right>
                    <form onSubmit={handleSubmit(onSubmit)} style={darkMode === "dark" ? bgDarkStyle : bgLightStyle} className="col-span-3 border border-slate-300 shadow-sm min-h-32 flex justify-center items-center">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <input {...field} type="text" placeholder="email" className="input input-bordered" />}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <Controller
                                    name="name"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <input {...field} type="text" placeholder="Your Name" className="input input-bordered" />}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your message</span>
                                </label>
                                <Controller
                                    name="message"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <textarea {...field} className="textarea textarea-bordered h-24" placeholder="Message"></textarea>}
                                />

                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </form>
                </Fade>
            </div>
        </div>
    );
};

export default Contact;