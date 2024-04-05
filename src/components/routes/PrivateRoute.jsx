import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);

    if(loading) {
        return <h1>Loading ...</h1>
    }
    if(user){
        return children;
    }

    return <Navigate to='/Login'></Navigate>
};

export default PrivateRoute;