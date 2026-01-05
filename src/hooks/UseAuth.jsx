import React, { use } from 'react';
import { AuthContext } from '../context/authcontext/AuthContext';

const UseAuth = () => {
             
    const authInfo = use(AuthContext)
    return authInfo;
   
};

export default UseAuth;