import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import Login from './Login';

const PrivateRoutes = () => {

 let loggedIn = true;
 if(loggedIn){
    return<Outlet/>
 }else{

 return <Navigate to={"/"}/>
    
 }
}

export default PrivateRoutes