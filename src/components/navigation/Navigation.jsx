import React, { Component } from "react";
import SidebarContent from './SidebarContent';
import Main from './Main';
import { Redirect } from 'react-router-dom';
import { logout } from '../login/Service';
import NavbarComponent from './NavbarComponent';
import Sidebar from 'react-sidebar';

class Navigation extends Component {

  constructor(props)
  {
    super(props);
    this.state =  {
      sidebarOpen: false,
      reedirect: false
    }
    this.onSetSidebarChange = this.onSetSidebarChange.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.setLogout = this.setLogout.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  onSetSidebarChange(){
    this.setState({sidebarOpen: !this.state.sidebarOpen});
  }

  setLogout(){
    logout().then((response) => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('name');
      localStorage.removeItem('role');
      localStorage.clear();
      this.setState({
        reedirect: true
      });
    }).catch(
        (error)=>{
            console.log(error);
            alert(error);
        }
    );
  }

  render() {
    if (!localStorage.getItem('name') || this.state.reedirect) {
      return <Redirect to={'/'} />
    }
    else{
      return (
        <>
          <NavbarComponent setLogout={this.setLogout} onSetSidebarOpen={this.onSetSidebarOpen}></NavbarComponent>
          {this.state.sidebarOpen?
            <Sidebar
              sidebar={<SidebarContent handleChange={this.onSetSidebarChange}/>}
              open={this.state.sidebarOpen}
              onSetOpen={this.onSetSidebarOpen}
              styles={{ sidebar: { background: "#FFFFFF"} }}
              >
            </Sidebar>
              :
            null
          }
          <Main></Main>
        </>
      );
    }
  }
}

export default Navigation;