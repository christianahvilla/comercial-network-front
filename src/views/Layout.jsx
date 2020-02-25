import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import mainStyles from './Style';
import Body from '../router/Body';
import { logoutActions } from '../actions/AuthActions';

const Layout = () => {
    const classes = mainStyles();
    const authenticated = useSelector((state) => state.authState.authenticated);
    const match = useRouteMatch();
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const {
        name,
    } = authenticated;

    useEffect(() => {
        if (!localStorage.getItem('reloaded')) {
            localStorage.setItem('reloaded', true);
            window.location.reload();
        }
    });

    const logout = () => {
        dispatch(logoutActions());
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header open={open} handleDrawerOpen={handleDrawerOpen} />
            <Sidebar
                open={open}
                handleDrawerClose={handleDrawerClose}
                userName={name}
                path={match.path}
                logout={logout}
            />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Body path={match.path} />
            </main>
        </div>
    );
};

export default Layout;
