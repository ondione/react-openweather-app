import React, { FC,FunctionComponent, ReactComponentElement, ReactNode } from "react";
import { Navigate  } from "react-router-dom";
import { useAppSelector } from '../../app/hooks';
import { selectAuth } from "../../features/auth/authSlice";

interface Props{
    component:FunctionComponent;
}
const ProtectedRoute:FC<Props> = ({component:Component}) =>{
    const isAuthenticated:boolean = useAppSelector(selectAuth).isLogged; 
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