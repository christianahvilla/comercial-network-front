import React, {useState} from 'react';
import DefaultTitle from '../components/common/Title';
import Form from '../components/login/Form';
import { Redirect } from 'react-router-dom';

const Login = () => {
    if (localStorage.getItem('name')) {
        return <Redirect to={'/auth/shop'}/>
    }
    else{
        return(
            <div className="mainBody">
                <DefaultTitle text="Login"/>
                <br></br>
                <Form/>
            </div>
        )    
    }
}

export default Login;