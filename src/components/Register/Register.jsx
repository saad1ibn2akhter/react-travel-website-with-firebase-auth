import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle ,FaFacebook } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister =(e) =>{
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(name,photo,email,password);

        createUser(email,password)
        .then(result => {
            console.log('user created succesfully !' , result.user)
            toast.success("User Created Succesfully!")
        })
        .catch(error => {
            console.error(error);
            toast.warn("Something went Wrong 404!")
        })




    }
    return (
        <div className='text-gray-800'>
            {/* <Navbar></Navbar> */}
            <div className="hero min-h-screen bg-base-200 font-poppins">
                <div className="hero-content flex-col ">

                    <div className="card shrink-0  w-[523px] shadow-2xl bg-base-100 p-6">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="text-center text-sm ">
                                <h1 className="text-[36px] font-bold">Register an account</h1>
                            </div> <br /><hr />
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name </span>
                                </label>
                                <input type="text" placeholder="Your Name " name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Photo URL</span>
                                </label>
                                <input type="text" placeholder="Your Photo " name='photo' className="input input-bordered" />
                            </div>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className='flex space-x-2'>
                                
                                <input type="checkbox" name="" id="" />
                                <label className="label">
                                    <span className="label-text">Please accept our terms an conditions</span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button  className="btn btn-warning">Create an account</button>
                            </div>
                            <Link to='/Login' >Already have an account ? <span className='link link-secondary tet-sm'>Login</span> </Link>
                            <div className="flex w-full items-center">
                                <div className="grid h-[2px] flex-grow card bg-base-300 rounded-box place-items-center"></div>
                                <div className="divider divider-horizontal">or</div>
                                <div className="grid h-[2px] flex-grow card bg-base-300 rounded-box place-items-center"></div>
                            </div>
                        <div className='w-full flex space-x-2 mx-auto justify-center'>
                                <button className='btn'>
                                <div className='flex  items-center  rounded-xl space-x-3'>
                                    <FaGoogle className='w-[28px] h-[28px]'> </FaGoogle>
                                    <h1>Login with Google</h1>
                                </div>
                                </button>
                                <button className='btn'>
                                <div className='flex items-center rounded-xl space-x-3'>
                                    <FaFacebook className='w-[28px] h-[28px]'> </FaFacebook>
                                    <h1>Login with Facebook</h1>
                                </div>
                                </button>
                            </div>
                        </form>
                       
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;