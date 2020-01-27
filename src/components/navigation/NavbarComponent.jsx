import React from 'react';
import { Navbar } from 'react-bootstrap';

class NavbarComponent extends React.Component{

    render() {
        return (
            <Navbar style={{boxShadow:'0 0 10px rgba(0,0,0,0.3)'}} bg="dark" variant="dark">
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