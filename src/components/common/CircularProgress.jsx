import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import clsx from 'clsx';
import mainStyles from '../../views/Style';

const DefaultProgress = (props) => {
    const {
        color,
    } = props;
    const classes = mainStyles();

    return (
        <Grid container className={clsx(classes.root)} spacing={3}>
            <Grid item className={clsx(classes.progress)}>
                <CircularProgress color={color} />
            </Grid>
        </Grid>
    );
};

export default DefaultProgress;
