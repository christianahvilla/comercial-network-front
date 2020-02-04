import React from 'react';
import { Redirect } from 'react-router-dom';
import DefaultTitle from '../components/common/Title';
import Form from '../components/login/Form';

const Login = () => {
    if (localStorage.getItem('name')) {
        return <Redirect to="/auth/shop" />;
    }

    return (
        <div className="mainBody">
            <DefaultTitle text="Login" />
            <br />
            <Form />
        </div>
    );
};

export default Login;
