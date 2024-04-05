import React from 'react';
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

const Hotel = () => {
    const { id } = useParams();
    const data = useLoaderData();
    console.log('UseParams from the Hotel :', id, data);

    const exactData = data.find(y => y.id === id);
    const { hotel_name, location } = exactData;
    console.log('Appropriete data :', exactData);
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };

    return (
        <div className='text-black'>
            <div className='max-w-6xl mx-auto'>
                <h1>Searching Hotel</h1>
                <h1>{hotel_name}</h1>
                <h1>{location}</h1>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "GOOGLE_MAP_API" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}>
                  
                </GoogleMapReact>
            </div>
        </div>
    );
};

export default Hotel;