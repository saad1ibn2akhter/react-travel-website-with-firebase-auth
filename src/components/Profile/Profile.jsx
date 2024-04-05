import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import {useNavigate} from 'react-router-dom';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const { displayName, photoURL, email , school} = user;
    const navigate = useNavigate();
    return (
        <div className='text-gray-700 max-w-6xl mx-auto'>
            {
                user ? <>
                    <img src={photoURL} alt="" />
                    <h1>{displayName}</h1>
                    <h1>{email}</h1>
                    <h1>{school}</h1>
                </>
                :
                navigate('/')

            }
        </div>
    );
};

export default Profile;