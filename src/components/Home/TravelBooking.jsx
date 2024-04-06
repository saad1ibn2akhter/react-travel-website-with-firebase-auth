// import { data } from 'autoprefixer';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import background from '../../assets/Rectangle 1.png'
import { useLoaderData } from 'react-router-dom';
import Calendar from './calender/Calender';
import { FaCalendar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { AuthLogin } from '../Login/Login';


const TravelBooking = ({children}) => {
    

    const { id } = useParams();
    const [showCalender, setShowCalender] = useState(false);
    

    const [startDate, setStartDate] = useState(new Date());
    const [endDate , setEndDate]  = useState(new Date());

    const handleCalender = () => {
        setShowCalender(!showCalender);
    }

    const info = useLoaderData();

    const slideWant = info.find(x => x.id === id)
    console.log('important slide : ', slideWant)

    const { title , description} = slideWant;

    console.log('Information form useeffect', info)
    console.log('from the travel booking  : ', id);

    

    // localStorage integration
    const handleLocalStorage =() =>{
        const storedInfo = getStoredJobApplication();
        if(storedInfo.includes(id)){
            console.log('already exist ');
        }
        else{
            savedJobApplication(id);
        }
        
    }
    const setLocalStorage = () =>{
        localStorage.setItem('tourId' , id);;
    }

    // localStorage integration

   
    return (
        <>
        <div className="w-full min-h-screen bg-cover bg-bottom bg-blend-saturation " style={{ backgroundImage: `url(${background})`, backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
            <div className='flex max-w-6xl mx-auto items-start justify-center py-24'>
                <div className='max-w-6xl mx-auto'>
                    <h1 className='text-[48px] font-extrabold shadow-2xl'>
                        <ReactTyped strings={[`${title}`]} typeSpeed={40} />
                    </h1>
                    
                    <p className='max-w-[80%] text-[18px] text-gray-400 shadow-white'>
                    <ReactTyped strings={[`${description}`]} typeSpeed={4} />
                    </p>
                </div>

                <div className='p-14 bg-white text-gray-800 min-w-[500px] max-w-[700px] '>
                    <form >   
                    <div>
                        <label htmlFor="">
                            <h1>Origin</h1>
                            <input type="text" className='bg-gray-100 w-full p-2' name='origin' placeholder='Dhaka' id="" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            <h1>Origin</h1>
                            <input type="text" className='bg-gray-100 w-full p-2' placeholder='Dhaka'  id="" />
                        </label>
                    </div>

                    <div className='flex space-x-2'>
                        <label htmlFor="" className='w-1/2'>
                            <h1>To</h1>
                            <div className='w-full'>
                                <input
                                    type="text"
                                    className='bg-gray-100 w-[150px] p-2'
                                    placeholder={startDate ? startDate.toLocaleDateString('en-GB') : "Select Date"} 
                                    onClick={handleCalender}
                                />
                                {showCalender && (
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                    />
                                )}
                            </div>
                        </label>
                        <label htmlFor="" className='w-1/2'>
                            <h1>To</h1>
                            <div className='w-full'> 
                                <input
                                    type="text"
                                    className='bg-gray-100 p-2 w-[150px]'
                                    placeholder={endDate ? endDate.toLocaleDateString('en-GB') : "Select Date"} 
                                    onClick={handleCalender}
                                />
                                {showCalender && (
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                    />
                                )}
                            </div>
                        </label>
                    </div>

                    <div>
                        <Link  to={`/Hotel/${id}`}><button onClick={setLocalStorage} className='btn btn-warning w-full'>Confirm Booking</button></Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default TravelBooking;