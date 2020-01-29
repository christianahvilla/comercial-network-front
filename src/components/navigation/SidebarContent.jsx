import React from 'react';
import { Link } from 'react-router-dom';
import './assets/style.css';

const SidebarContent = () =>  {
    return (
        <div id='sidebar'>
            <div id='sidebarTitle'>Menú</div>
            <hr></hr>
            <ul className="navbar-nav mr-auto">
                <Link to={'/auth/shop'} className="nav-link"><i className="fa fa-home" aria-hidden="true"></i> Negocio</Link>
                <Link to={'/'} className="nav-link">__</Link>
            </ul>
        </div>
    );
}

export default SidebarContent;