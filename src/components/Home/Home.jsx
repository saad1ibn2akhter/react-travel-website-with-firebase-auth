import React, { useContext } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';
import background from '../../assets/Rectangle 1.png'
import { useLoaderData } from 'react-router-dom';

import { Navigation, Pagination, History } from 'swiper/modules';
import SingleSlide from './SingleSlide';


const Home = ({children}) => {

    const slides = useLoaderData();
    console.log('from loader :' , slides);
    return (
        <div className="w-full min-h-screen bg-cover bg-bottom bg-blend-saturation font-poppins" style={{ backgroundImage: `url(${background})`, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>

            <Swiper
                className='bg-transparent max-w-6xl mx-auto '
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={true}
                history={{
                    key: 'slide',
                }}
                onResetCapture={true}
                modules={[Navigation, Pagination, History]}
                style={{ height: "calc(100vh - 100px)" }} 
            >
                <div>
         
                </div>

                {slides.map((slide, index) => (
                    <SwiperSlide key={index} data-history="1">
                        <SingleSlide slide={slide} />
                    </SwiperSlide>
                ))}
          
            </Swiper>
        </div>
    );
};

export default Home;
