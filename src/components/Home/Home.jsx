import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';
import background from '../../assets/Rectangle 1.png'
// import required modules
import { Navigation, Pagination, History } from 'swiper/modules';

const Home = () => {
    return (
        <div className="w-full min-h-screen bg-cover bg-bottom bg-blend-saturation" style={{ backgroundImage: `url(${background})`, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <h1>this is home</h1>
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
                style={{ height: "calc(100vh - 100px)" }} // Adjust height as per your design
            >
                <SwiperSlide data-history="1" >
                    <div className='flex gap-[32px] justify-between items-center bg-transparent'>
                        <div>
                            <h1 className='col-span-2 max-w-[80%] mx-auto text-center'>Lorem ipsum dolor sit amet consectet olestias, repudiandae eveniet ducimus necessitatibus sed architecto mollitia nemo corporis natus?</h1>
                            <button className='btn btn-warning'>Booking</button>
                        </div>
                        <div>
                            <img src={background} className='max-h-[700px] min-w-[300px] min-h-[500px] border shadow-2xl max-w-[500px]' alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide data-history="1" >
                    <div className='flex gap-[32px] justify-between items-center bg-transparent'>
                        <div>
                            <h1 className='col-span-2 max-w-[80%] mx-auto text-center'>Lorem ipsum dolor sit amet consectet olestias, repudiandae eveniet ducimus necessitatibus sed architecto mollitia nemo corporis natus?</h1>
                            <button className='btn btn-warning'>Booking</button>
                        </div>
                        <div>
                            <img src={background} className='max-h-[700px] min-w-[300px] min-h-[500px] border shadow-2xl max-w-[500px]' alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide data-history="1" >
                    <div className='flex gap-[32px] justify-between items-center bg-transparent'>
                        <div>
                            <h1 className='col-span-2 max-w-[80%] mx-auto text-center'>Lorem ipsum dolor sit amet consectet olestias, repudiandae eveniet ducimus necessitatibus sed architecto mollitia nemo corporis natus?</h1>
                            <button className='btn btn-warning'>Booking</button>
                        </div>
                        <div>
                            <img src={background} className='max-h-[700px] min-w-[300px] min-h-[500px] border shadow-2xl max-w-[500px]' alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide data-history="Slide 2">Slide 2</SwiperSlide>
                <SwiperSlide data-history="3">Slide 3</SwiperSlide>
                <SwiperSlide data-history="Slide 4">Slide 4</SwiperSlide>
                <SwiperSlide data-history="5">Slide 5</SwiperSlide>
                <SwiperSlide data-history="Slide 6">Slide 6</SwiperSlide>
                <SwiperSlide data-history="7">Slide 7</SwiperSlide>
                <SwiperSlide data-history="Slide 8">Slide 8</SwiperSlide>
                <SwiperSlide data-history="9">Slide 9</SwiperSlide> */}
            </Swiper>
        </div>
    );
};

export default Home;