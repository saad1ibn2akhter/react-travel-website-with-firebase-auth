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
    const { title, description, id } = slide;
    console.log('from slide =>', title)
    return (
        <div className='bg-red'>
            <SwiperSlide data-history="1" >
                <div className='flex gap-[32px] justify-between items-center bg-transparent'>
                    <div>
                        <h1 className='col-span-2 max-w-[80%] mx-auto text-center'>{description}</h1>
                        <Link to={`/TravelBooking/${id}`}>
                            <button className='btn btn-warning flex space-x-1 text-center justify-center mx-auto' >

                                <FaArrowRight></FaArrowRight>
                            </button>
                        </Link>

                    </div>
                    <div>
                        <img src={background} className='max-h-[700px] min-w-[300px] min-h-[500px] border shadow-2xl max-w-[500px]' alt="" />
                    </div>
                </div>
            </SwiperSlide>
        </div>
    );
};

export default SingleSlide;