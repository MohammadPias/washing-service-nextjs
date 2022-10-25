import React from 'react';
import logo from "../images/logo-light.svg"
import logoDark from "../images/logo-dark.svg";
import Image from 'next/image';
import { useForm, Controller } from "react-hook-form";
import NextLink from "next/link";

const SignUp = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-3">
                <div className="col-span-1 border border-slate-400 shadow-sm lg:border-b-neutral-content lg:border-r-neutral-content p-5 flex items-center">
                    <Image src={logoDark} alt="logo" />
                </div>
                <div className="col-span-2 border border-slate-300 shadow-sm">

                    <h3 className='text-center text-secondary mt-5'>Sign Up</h3>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center">
                        <div className="card-body">

                            <div className="form-control">
                                <Controller
                                    name="name"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <input {...field} type="text" placeholder="Your Name" className="input input-bordered" />}
                                />
                            </div>


                            <div className="form-control">
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <input {...field} type="text" placeholder="email" className="input input-bordered" />}
                                />
                            </div>

                            <div className="form-control">
                                <Controller
                                    name="password"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <input {...field} type="password" placeholder="password" className="input input-bordered" />}
                                />
                            </div>


                            <div className="form-control">
                                <Controller
                                    name="confirm-password"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <input {...field} type="password" placeholder="Confirm-password" className="input input-bordered" />}
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Sign Up</button>
                            </div>
                            <p className="text-primary font-medium">Already have an account?  Please <NextLink href="/signin">SignIn</NextLink></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;