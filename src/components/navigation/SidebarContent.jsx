import React from 'react';
import { Link } from 'react-router-dom';

const SidebarContent = () =>  {
    return (
        <div style={{margin:10, color: '#000000'}}>
            <div style={{textAlign: 'center', fontWeight: 'bold', fontSize: '18pt', color: '#000000'}}>Menú</div>
            <hr></hr>
            <ul className="navbar-nav mr-auto">
                <Link to={'/auth/shop'} className="nav-link"><i className="fa fa-home" aria-hidden="true"></i> Negocio</Link>
                <Link to={'/'} className="nav-link">__</Link>
            </ul>
        </div>
    );
}

export default SidebarContent;