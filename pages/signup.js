import React from 'react';
import logo from "../images/logo-light.svg"
import logoDark from "../images/logo-dark.svg";
import Image from 'next/image';
import { useForm, Controller } from "react-hook-form";
import NextLink from "next/link";
import Layout from '../components/layout/Layout';
import { CheckTheme, instance } from '../utils/helper';
import { useEffect } from 'react';
import { getError } from '../utils/error';
import { useState } from 'react';
import useContextApi from '../utils/useStore';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const SignUp = () => {
    const { control, handleSubmit } = useForm();
    const [errMsg, setErrMsg] = useState(null);

    const darkMode = CheckTheme();
    const { state, dispatch } = useContextApi();
    const router = useRouter();
    const { redirect } = router.query;

    useEffect(() => {
        if (state?.user) {
            router.push("/")
        }
    }, [state?.user, router])

    const register = async (user) => {
        setErrMsg(null)
        try {
            const { data } = await instance.post("/signup", {
                name: user.name,
                email: user.email,
                password: user.password,
            }
            );
            dispatch({ type: "SIGN_IN", payload: data })
            Cookies.set("user", JSON.stringify(data))
            // console.log(response.data)
            router.push(redirect || "/")
        } catch (err) {
            const error = getError(err)
            setErrMsg(error)
            console.log(error)
        }
    }

    const onSubmit = (data) => {
        if (data.password === data.confirmPassword) {
            // console.log(data)
            register(data)
        } else {
            alert("Password don't match!")
        }
    };
    return (
        <Layout title="Signup">
            <div className='min-h-screen flex justify-center items-center'>
                <div className="lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-3">
                    <div className="col-span-1 border border-slate-400 shadow-sm lg:border-b-neutral-content lg:border-r-neutral-content p-5 flex items-center">
                        {
                            darkMode === "dark" ?
                                <Image src={logo} alt="logo" />
                                :
                                <Image src={logoDark} alt="logo" />
                        }
                    </div>
                    <div className="col-span-2 border border-slate-300 shadow-sm">

                        <h3 className='text-center text-secondary dark:text-white mt-5'>Sign Up</h3>

                        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center">
                            <div className="card-body">

                                <div className="form-control">
                                    <Controller
                                        name="name"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => <input {...field} type="text" placeholder="Your Name" className="input input-bordered dark:text-slate-600" />}
                                    />
                                </div>


                                <div className="form-control">
                                    <Controller
                                        name="email"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => <input {...field} type="text" placeholder="email" className="input input-bordered dark:text-slate-600" />}
                                    />
                                </div>

                                <div className="form-control">
                                    <Controller
                                        name="password"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => <input {...field} type="password" placeholder="password" className="input input-bordered dark:text-slate-600" />}
                                    />
                                </div>


                                <div className="form-control">
                                    <Controller
                                        name="confirmPassword"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => <input {...field} type="password" placeholder="Confirm-password" className="input input-bordered dark:text-slate-600" />}
                                    />
                                </div>
                                {

                                    errMsg &&
                                    <div className='p-3 flex items-center justify-center bg-red-50 text-primary rounded-md'>{errMsg}</div>
                                }
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Sign Up</button>
                                </div>
                                <p className="text-primary font-medium">Already have an account?  Please <NextLink href={`/login?redirect=${redirect || '/'}`}>SignIn</NextLink></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SignUp;

SignUp.getLayout = function pageLayout(page) {
    return (
        <>
            {page}
        </>
    )
}