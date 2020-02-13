import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../views/Login';
import Layout from '../views/Layout';
import NotFound from '../views/NotFound';

const LoginRoute = ({ component: Component, ...rest }) => {
    const authenticated = useSelector((state) => state.authState.authenticated);
    return (
        <Route
            {...rest}
            render={(props) => (authenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/login' }} />
            ))}
        />
    );
};

const LogoutRoute = ({ component: Component, ...rest }) => {
    const authenticated = useSelector((state) => state.authState.authenticated);
    return (
        <Route
            {...rest}
            render={(props) => (!authenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/account/home' }} />
            ))}
        />
    );
};

const Router = () => {
    return (
        <Switch>
            <LogoutRoute path="/login" component={Login} />
            <LoginRoute path="/account" component={Layout} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
};

export default Router;
