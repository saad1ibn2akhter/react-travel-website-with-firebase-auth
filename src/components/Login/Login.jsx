import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
// import google '../../assets/'
import { FaFacebook, FaGoogle } from 'react-icons/fa';
const Login = () => {
    return (
        <div className='text-black'>
            {/* <Navbar></Navbar> */}
            <div className="hero min-h-screen bg-base-200 font-poppins">
                <div className="hero-content flex-col ">

                    <div className="card shrink-0  w-[523px] shadow-2xl bg-base-100 p-6">
                        <form className="card-body">
                            <div className="text-center text-sm ">
                                <h1 className="text-[36px] font-bold">Login to your account</h1>
                            </div> <br /><hr />

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" placeholder="Your email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Password</span>
                                </label>
                                <input type="password" placeholder="Your password" name='password' className="input input-bordered" required />
                                <label className="label flex justify-between items-center">
                                    <label htmlFor="" className='flex items-center space-x-2'>
                                        <input type="checkbox" name="" id="" />
                                        <h1>Remember Me</h1>
                                    </label>
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                            <Link to='/Register' >Don't have an account ? <span className='link link-secondary tet-sm'>Register</span> </Link>
                            <div className="flex w-full items-center">
                                <div className="grid h-[2px] flex-grow card bg-base-300 rounded-box place-items-center"></div>
                                <div className="divider divider-horizontal">or</div>
                                <div className="grid h-[2px] flex-grow card bg-base-300 rounded-box place-items-center"></div>
                            </div>
                            <div className='w-full flex space-x-2 mx-auto justify-center'>
                                <div className='flex border items-center p-3 rounded-xl space-x-3'>
                                    <FaGoogle className='w-[28px] h-[28px]'> </FaGoogle>
                                    <h1>Login with Google</h1>
                                </div>
                                <div className='flex border items-center p-3 rounded-xl space-x-3'>
                                    <FaFacebook className='w-[28px] h-[28px]'> </FaFacebook>
                                    <h1>Login with Facebook</h1>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;