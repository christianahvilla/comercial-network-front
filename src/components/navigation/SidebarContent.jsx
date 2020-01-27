import React from 'react';
import { MDBIcon } from "mdbreact";
import { Link } from 'react-router-dom';

const SidebarContent = () =>  {
    return (
        <div style={{margin:10, color: '#000000'}}>
                <ul className="navbar-nav mr-auto">
                    <Link to={'/auth/shop'} className="nav-link"><MDBIcon icon="star" /> Negocio</Link>
                    <Link to={'/'} className="nav-link"><MDBIcon icon="arrow-right" /></Link>
                    <Link to={'/'} className="nav-link"><MDBIcon far icon="file" /></Link>
                </ul>
        </div>
    );
}

export default SidebarContent;