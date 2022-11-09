import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext);
    if (user){
        return children;
    }
    


    
};

export default PrivateRoute;