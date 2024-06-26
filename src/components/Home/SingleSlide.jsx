import React from 'react';
import logo from '../../assets/logo.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';
import background from '../../assets/Rectangle 1.png'

import { Navigation, Pagination, History } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleSlide = ({ slide }) => {
    const { title, description, id , image } = slide;
    console.log('from slide =>', title , image)
   
    
    return (
        <div className='bg-red'>
            <SwiperSlide data-history="1" >
                <div className='flex gap-[32px] justify-between items-center bg-transparent'>
                    <div className='space-y-2'>
                        <h1 className='text-[48px] shadow-2xl text-left px-20 font-extrabold'>{title}</h1>
                        <h1 className='col-span-2 max-w-[80%] mx-auto text-start text-gray-300'>{description}</h1>
                        <Link to={`/TravelBooking/${id}`}>
                            <button className='btn btn-warning flex space-x-1 translate-x-[80px] translate-y-2' >
                                <h1>Booking</h1>
                                <FaArrowRight></FaArrowRight>
                            </button>
                        </Link>

                    </div>
                    <div className=''>
                        <img src={image} className='max-h-[700px] min-w-[300px] min-h-[500px] border shadow-2xl max-w-[500px] rounded-2xl border-none ' alt="" />
                    </div>
                </div>
            </SwiperSlide>
        </div>
    );
};

export default SingleSlide;