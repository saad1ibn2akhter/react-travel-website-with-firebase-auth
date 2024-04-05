// import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import background from '../../assets/Rectangle 1.png'
import { useLoaderData } from 'react-router-dom';
import Calendar from './calender/Calender';
import { FaCalendar } from 'react-icons/fa';

const TravelBooking = () => {
    const { id, description } = useParams();
    const [showCalender, setShowCalender] = useState(false);

    const handleCalender =() =>{
        setShowCalender(!showCalender);
    }

    // const [info, setInfo] = useState([]);

    // useEffect(() => {
    //     fetch('https://raw.githubusercontent.com/saad1ibn2akhter/Fake-Slide-Data-for-Travel-Web/main/fakeInfo')
    //         .then(res => res.json())
    //         .then(data => setInfo(data))
    // }, [])

    const info = useLoaderData();


    const slideWant = info.find(x => x.id === id)
    console.log('important slide : ', slideWant)

    console.log('Information form useeffect', info)
    console.log('from the travel booking  : ', id, description);
    return (
        <div className="w-full min-h-screen bg-cover bg-bottom bg-blend-saturation " style={{ backgroundImage: `url(${background})`, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className='flex max-w-6xl mx-auto items-center justify-center py-16'>
                <div className='max-w-6xl mx-auto'>
                    <h1>Details are shown here</h1>
                    <h1>{id}</h1>
                    <p>{slideWant.description}</p>
                </div>

                <div className='p-10 bg-white text-gray-800 min-w-[400px] max-w-[600px] '>
                    <div>
                        <label htmlFor="">
                            <h1>Origin</h1>
                            <input type="text" className='bg-gray-100 w-full p-2' placeholder='Dhaka' name="" id="" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            <h1>Origin</h1>
                            <input type="text" className='bg-gray-100 w-full p-2' placeholder='Dhaka' name="" id="" />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="">
                            <h1>To</h1>
                            <label htmlFor="">
                            <input type="text" className='bg-gray-100 w-1/2 p-2' onFocus={handleCalender} name="" id="" />
                            {
                                showCalender && <Calendar></Calendar>
                            }
                            
                            </label>
                        </label>
                        <label htmlFor=""></label>
                    </div>

                    <div>
                         <button className='btn btn-warning w-full'>Confirm Booking</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelBooking;