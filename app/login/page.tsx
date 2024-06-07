'use client';

import Head from 'next/head';
import Image from "next/image";
import img from "../../public/images/logo-main-circle.png";
import {login} from "@/app/login/actions";
import {useSearchParams} from "next/navigation";


export default function Login() {

    // get the error message from the URL
    const searchParams = useSearchParams()

    const error = searchParams.get('error')


    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>Login</title>
            </Head>
            <div className="flex-grow flex bg-base-200 justify-center items-center">
                <div className="card w-96 bg-base-100 shadow-xl m-10 p-7">
                    <div className="card-body flex justify-center items-center">
                        <Image src={img} alt="Logo Image" width={150} height={150} className="m-2 "></Image>
                        <div
                            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                            role="alert" hidden={error == null}>
                            <span className="font-medium">Error!</span> {error}
                        </div>
                        <form className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email"
                                   className="input input-bordered input-primary w-full"/>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password"
                                   className="input input-bordered input-primary w-full"/>
                            <div className="form-control mt-6">
                                <button type="submit" id="error-message" formAction={login}
                                        className="btn btn-primary">Login
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Workr.</p>
                </aside>
            </footer>
        </div>
    );
}

