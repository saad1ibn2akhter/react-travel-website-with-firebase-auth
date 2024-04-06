import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Profile = () => {
    const { user } = useContext(AuthContext);
    const { displayName, photoURL, email, school } = user;
    const navigate = useNavigate();

    const data = useLoaderData();
    console.log('data from the useloaer data of the profile cmpoment', data)

    const localData = localStorage.getItem('tourId');
    console.log('its from the localStrage', localData);

    const chosenData = data.find(x => x.id === localData)
    console.log('card needed , ', chosenData);

    const { title, description, image, hotel_name } = chosenData;

    const tata = [
        {
            name: 'Page A',
            hello: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            hello: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            hello: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            hello: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            hello: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            hello: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            hello: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <>

            <div className='flex items-start max-w-6xl mx-auto text-gray-800'>
                <div className='w-2/10 text-gray-700 border p-6 space-y-3'>
                    {
                        user ? <>
                            <img src={photoURL} alt="" />
                            <h1 className='font-bold text-[20px]'>{displayName}</h1>
                            <h1 className='font-bold'>{email}</h1>
                            <h1 className='font-bold'>{school}</h1>
                        </>
                            :
                            navigate('/')

                    }
                </div>

                <div>
                    <h1>Most Recent Tour </h1>
                    <div className='flex'>
                    <div className='flex w-8/10 space-x-4 text-gray-700 items-end border'>
                        <img src={image} className='w-[400px] h-[400px] bg-blend-darken bg-opacity-70 bg-black' alt=""  />
                        <h1 className='text-[24px] shadow-black bg-gray-600  -translate-x-[335px] text-white w-[200px] -translate-y-18 font-bold'>{title}</h1>
                        {/* <h1>{hotel_name}</h1> */}
                    </div>
                    <div>
                    <ResponsiveContainer width={400} height={400}>
                <BarChart data={tata}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="hello" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
                    </div>
                    </div>
                </div>
            </div>
           {/* <div className='max-w-6xl mx-auto px-[200px]'>
           <ResponsiveContainer width={400} height={400}>
                <BarChart data={tata}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
           </div> */}
        </>
    );
};

export default Profile;