import React from 'react';
import logo from "../images/logo-light.svg"
import logoDark from "../images/logo-dark.svg";
import Image from 'next/image';
import { useForm, Controller } from "react-hook-form";
import NextLink from "next/link";
import Footer from '../components/footer/Footer';
import Layout from '../components/layout/Layout';
import { CheckTheme } from '../helper/helper';

const SignIn = () => {
    const { control, handleSubmit } = useForm();
    const darkMode = CheckTheme()
    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <Layout>
            <div className='min-h-screen flex justify-center items-center'>
                <div className="lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-3">
                    <div className="col-span-1 border border-slate-400 shadow-sm border-r-neutral-content p-5 flex items-center">
                        {
                            darkMode ?
                                <Image src={logo} alt="logo" />
                                :
                                <Image src={logoDark} alt="logo" />
                        }
                    </div>
                    <div className="col-span-2 border border-slate-300 shadow-sm p-5 ">

                        <h3 className='text-center text-secondary dark:text-white'>Sign In</h3>

                        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center text-slate-800 dark:text-slate-200">
                            <div className="card-body">


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-slate-200">Email</span>
                                    </label>
                                    <Controller
                                        name="email"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => <input {...field} type="text" placeholder="email" className="input input-bordered dark:text-slate-500" />}
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-slate-200">Password</span>
                                    </label>
                                    <Controller
                                        name="password"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => <input {...field} type="password" placeholder="password" className="input input-bordered dark:text-slate-500" />}
                                    />
                                </div>

                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </div>
                                <p className="text-primary font-medium">New to Pressure Washing services?  Please <NextLink href='/signup'>SignUp</NextLink></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SignIn;

SignIn.getLayout = function pageLayout(page) {
    return (
        <>
            {page}
        </>
    )
}