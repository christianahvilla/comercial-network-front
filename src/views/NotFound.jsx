import React from 'react';
import { Grid } from '@material-ui/core';
import clsx from 'clsx';
import notFound from '../assets/notFound.png';
import mainStyles from './Style';
import DefaultTitle from '../components/common/Title';

const NotFound = () => {
    const classes = mainStyles();
    return (
        <Grid container spacing={3}>
            <Grid container className={clsx(classes.notFound)} item xs={12}>
                <p className={clsx(classes.four)}>4</p>
                <img
                    className={clsx(classes.img)}
                    src={notFound}
                    alt="Not Found"
                />
                <p className={clsx(classes.four)}>4</p>
            </Grid>
            <Grid item className={clsx(classes.messageFound)}>
                <DefaultTitle
                    text="Está página es un fantasma..."
                    variant="h3"
                />
                <DefaultTitle
                    className={clsx(classes.legendFound)}
                    text="Una vez vivo y ahora muerto, este
                    fantasma parece tener algunos asuntos pendientes.
                    ¿Podria ser contigo? O el tesoro escondido debajo de las tablas del piso de
                    la vieja mansión en las colinas que nunca puede llegar a su legítimo dueño, un
                    compasivo maestro de escuela en Morelia.
                    "
                    variant="body1"
                />
            </Grid>
        </Grid>
    );
};

export default NotFound;
