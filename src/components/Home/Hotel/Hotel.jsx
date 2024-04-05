import React from 'react';
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const Hotel = () => {
    const {id} = useParams();
    const data = useLoaderData();
    console.log('UseParams from the Hotel :' ,id,data);

    const exactData = data.find(y => y.id === id);
    const {hotel_name , location} = exactData;
    console.log('Appropriete data :' , exactData);

    return (
        <div className='text-black'>
            <div className='max-w-6xl mx-auto'>
            <h1>Searching Hotel</h1>
            <h1>{hotel_name}</h1>
            <h1>{location}</h1>
            </div>
        </div>
    );
};

export default Hotel;