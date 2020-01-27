import React from 'react';
import { MDBIcon } from "mdbreact";
import { Navbar } from 'react-bootstrap';

class NavbarComponent extends React.Component{
    constructor(props)
    {
      super(props);
    }

    render() {
        return (
            <Navbar inverse staticTop style={{boxShadow:'0 0 10px rgba(0,0,0,0.3)'}} bg="dark" variant="dark">
                <Navbar.Text onClick={() => this.props.onSetSidebarOpen(true)}>
                <MDBIcon icon="bars" />
                </Navbar.Text>
                
                <Navbar.Collapse className="justify-content-end">
                <a onClick={()=>this.props.setLogout()} style={{color: 'white'}}>
                    Cerrar Sesion
                </a>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarComponent;