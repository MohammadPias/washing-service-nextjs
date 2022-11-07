import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import Cookies from 'js-cookie';
import Image from 'next/image';
import NextLink from "next/link";

import logo from "../images/logo-light.svg"
import logoDark from "../images/logo-dark.svg";
import Layout from '../components/layout/Layout';
import { CheckTheme } from '../utils/helper';
import Router, { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToken } from '../features/userSlice';
import { useEffect } from 'react';

const SignIn = () => {
    const { control, handleSubmit } = useForm();
    const darkMode = CheckTheme();

    const router = useRouter();
    const { redirect } = router.query;
    const { info, loading, error } = useSelector(state => state.user);
    const dispatch = useDispatch();


    useEffect(() => {
        if (info) {
            router.push("/")
        }
    }, [router, info])

    console.log(router.query, Router)
    const onSubmit = async (data) => {
        dispatch(fetchToken(data));
        if (info?.token) {
            Cookies.set("user", JSON.stringify(info));
            router.push(redirect || "/");
        }
    };
    return (
        <Layout title="Signin">
            <div className='min-h-screen flex justify-center items-center'>
                <div className="lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-3">
                    <div className="col-span-1 border border-slate-400 shadow-sm border-r-neutral-content p-5 flex items-center">
                        {
                            darkMode === "dark" ?
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
                                {

                                    error &&
                                    <div className='p-3 flex items-center justify-center bg-red-50 text-primary rounded-lg border border-red-200 shadow-sm mt-3'>{error}</div>
                                }

                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">{loading ? "Loading..." : "Login"}</button>
                                </div>
                                <p className="text-primary font-medium">New to Pressure Washing services?  Please <NextLink href={`/signup?redirect=${redirect || '/'}`}>SignUp</NextLink></p>
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