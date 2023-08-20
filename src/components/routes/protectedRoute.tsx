import React, { FC,FunctionComponent, ReactComponentElement, ReactNode } from "react";
import { Navigate  } from "react-router-dom";
import { useSelector } from 'react-redux';

interface Props{
    component:FunctionComponent;
}
const ProtectedRoute:FC<Props> = ({component:Component}) =>{
    const isAuthenticated:boolean = true; //useSelector(selectAuth).isLogged; 
    // logic to autorise routes
    return ( 
        <>
        { isAuthenticated ? 
          <Component  /> : 
         <Navigate to={"/login"}  replace />}
        </>
    );
}

export default ProtectedRoute;