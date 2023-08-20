import React, { FC }  from 'react';
import { Outlet  } from "react-router-dom";
import { MainLayout } from '../../Layout/MainLayout'

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