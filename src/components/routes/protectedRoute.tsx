import React, { FC,FunctionComponent, ReactComponentElement, ReactNode } from "react";
import { Navigate  } from "react-router-dom";
<<<<<<< Updated upstream
import { useSelector } from 'react-redux';
=======
import { useAppSelector } from '../../app/hooks';
import { selectAuth } from "../../features/auth/authSlice";
>>>>>>> Stashed changes

interface Props{
    component:FunctionComponent;
}
const ProtectedRoute:FC<Props> = ({component:Component}) =>{
<<<<<<< Updated upstream
    const isAuthenticated:boolean = true; //useSelector(selectAuth).isLogged; 
=======
    const isAuthenticated:boolean = useAppSelector(selectAuth).isLogged; 
>>>>>>> Stashed changes
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