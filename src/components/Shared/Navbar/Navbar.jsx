import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(res => {
            console.log('user logged out succesfully' , res.user)

        })
        .catch(error => console.error(error))
    }

    const links = <>
        <label className='flex space-x-2 items-center -translate-x-11'>
            <FaSearch className=' translate-x-8'></FaSearch>
            <input type="text " placeholder='Search Destination...' className='px-10 mr-8 h-[35px] w-[325px] rounded-xl text-[16px]' name="" id="" />
        </label>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/n'>News</NavLink></li>
        <li><NavLink to='/d'>Destination</NavLink></li>
        <li><NavLink to='/b'>Blog</NavLink></li>
        <li><NavLink to='/Coding'>Code</NavLink></li>

    </>
    return (
        <div className='bg-gray-200 text-black z-10'>
            <div className='shadow-3xl mx-auto max-w-6xl bg-transparent bg-gray-200'>
                <div className="navbar bg-gray-200 ">
                    <div className="navbar-start ">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1]  shadow bg-base-100 rounded-box w-52">
                                {links}
                            </ul>
                        </div>
                        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                        <img className='w-[160px] h-[65px]' src={logo} alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                   
                    <div className="navbar-end flex space-x-2">

                    <div>
                        {
                            user && <Link to='/Profile'><img className='w-[50px] h-[50px] rounded-full' src={user.photoURL} alt="" /></Link>
                        }
                    </div>

                        <div>
                        {
                            user ?
                                <button onClick={handleLogOut} className='btn btn-warning bg-red-600'> Sign Out </button>
                                :
                                <Link to='/Login'>
                                    <button className='btn btn-warning'> Login </button>
                                </Link>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;