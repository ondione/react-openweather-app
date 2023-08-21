import React, { FC }  from 'react';
import { Outlet  } from "react-router-dom";
<<<<<<< Updated upstream
import { MainLayout } from '../../Layout/MainLayout'
=======
import { MainLayout } from '../../Layout/MainLayout';
>>>>>>> Stashed changes

const HomeComponent:FC = () => {
    return (
        <>
            <MainLayout />
            <main id="main" className="container mt-5">
                <Outlet />
            </main>
        </>
    );
}

export default HomeComponent;