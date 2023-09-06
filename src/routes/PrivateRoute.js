import React from 'react';
import UserContext, { AuthContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = UserContext(AuthContext);

    if(loading){
        return <div>Loading...</div>
    }


    if(user && user.uid) {
        return children;
    }
    return <Navigate to ='/login'></Navigate>;
};

export default PrivateRoute;


