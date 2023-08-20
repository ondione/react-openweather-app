import React, { useState }  from 'react';
import './Header.module.css';

export function HeaderComponent() {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => { setOpen(!open);};
    const [toggleButton , setToggleButton] = useState<boolean>(false);
    const imgUrl = "/img/avatar.jpg";
    const toggleSideBar = ()=>{
        setToggleButton(!toggleButton);
    };

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Metéo app</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                       
                    </ul>
                
                    </div>
                </div>
            </nav>
        </>
    );
}