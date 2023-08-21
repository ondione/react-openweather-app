import React, { useState }  from 'react';
<<<<<<< Updated upstream
import './Header.module.css';
=======
import { selectAuth } from '../../features/auth/authSlice'
import { useAppSelector } from '../../app/hooks';
>>>>>>> Stashed changes

export function HeaderComponent() {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => { setOpen(!open);};
    const [toggleButton , setToggleButton] = useState<boolean>(false);
    const imgUrl = "/img/avatar.jpg";
    const toggleSideBar = ()=>{
        setToggleButton(!toggleButton);
    };
<<<<<<< Updated upstream
=======
    const userLogin = useAppSelector(selectAuth).login;
>>>>>>> Stashed changes

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Metéo app</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
<<<<<<< Updated upstream
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                       
                    </ul>
                
=======
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className='connectedUser'>
                            <span className="d-none d-md-block  ps-2">{userLogin}</span> 
                            <img src={imgUrl}  className="rounded-circle" />
                        </div>
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        </ul>
>>>>>>> Stashed changes
                    </div>
                </div>
            </nav>
        </>
    );
}