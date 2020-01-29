import React from 'react';
import { Navbar } from 'react-bootstrap';
import './assets/style.css';

class NavbarComponent extends React.Component{

    render() {
        return (
            <Navbar id='navbar' bg="dark" variant="dark">
                <Navbar.Text onClick={() => this.props.onSetSidebarOpen(true)}>
                    <i className="fa fa-bars" aria-hidden="true" style={{cursor: 'pointer', color: 'white'}}></i>
                </Navbar.Text>
                
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text onClick={()=>this.props.setLogout()} style={{cursor: 'pointer', color: 'white'}}>
                    Cerrar Sesion
                </Navbar.Text >
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarComponent;