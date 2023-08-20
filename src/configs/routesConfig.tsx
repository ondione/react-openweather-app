import React , {  lazy }  from 'react';
import { RouteObject, useRoutes }  from 'react-router-dom';
import ProtectedRoute from '../components/routes/protectedRoute';

const PagNotFoundComponent = lazy(() => import("../components/PageNotFound"));
const LoginComponent = lazy(() => import("../features/auth/Auth"));
const HomeComponent = lazy(() => import("../components/home/HomeComponent"));
const ResultWeatherComponent = lazy(() =>import("../components/resultWeather/resultWeather"));
const WeatherHistoryComponent = lazy(() => import("../components/HistoryWeather/History"));

const routesConfig: Array<RouteObject> = [
    {
        path: '/',
        element:<LoginComponent />
    },
    {
        path: 'login',
        element: <LoginComponent />
    },
    {
       path:'home',
        element:(
            <ProtectedRoute component={HomeComponent } /> ),
        children:[
            {
                path: '',
                element:(<ProtectedRoute  component={ResultWeatherComponent} /> )
            },
            {
                path: 'history',
                element:(<ProtectedRoute  component={WeatherHistoryComponent} /> )
            },
        ]
    },
    {
        path: '*',
        element:<PagNotFoundComponent />
    }
];

export const RoutesConfig = () =>{
    const router = useRoutes(routesConfig);
    return router;
}