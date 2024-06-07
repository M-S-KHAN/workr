import Head from 'next/head';
import Image from "next/image";
import img from "../../public/images/logo-main-circle.png";

export default function Login() {
    return (
        <div className="flex min-h-screen bg-base-200 justify-center items-center">
            <Head>
                <title>Login</title>
            </Head>
            <div className="card w-96 bg-base-100 shadow-xl m-10">
                <div className="card-body flex justify-center items-center">
                    <Image src={img} alt="Logo Image" width={150} height={150} className="m-2 "></Image>
                    <form className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered input-primary w-full" />
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered input-primary w-full" />
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
