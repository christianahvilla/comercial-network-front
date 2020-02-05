import React from 'react';
import { Grid } from '@material-ui/core';
import clsx from 'clsx';
import Form from '../components/login/Form';
import mainStyles from './Style';

const Login = () => {
    const classes = mainStyles();
    return (
        <Grid className={clsx(classes.root)} container spacing={3}>
            <Grid item xs={false} sm={4} />
            <Grid item xs={12} sm={4}>
                <Form />
            </Grid>
            <Grid item xs={false} sm={4} />
        </Grid>
    );
};

export default Login;
