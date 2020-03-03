import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import clsx from 'clsx';
import mainStyles from './Style';
import DefaultTitle from '../components/common/Title';
import DefaultProgress from '../components/common/CircularProgress';
import DefaultChart from '../components/common/Chart';

const Home = () => {
    const classes = mainStyles();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, [loading]);

    const shopsSales = [
        { value: 3500, argument: 'Farmacias' },
        { value: 7500, argument: 'Abarrotes' },
        { value: 2100, argument: 'Ferreterías' },
        { value: 4700, argument: 'Papelerías' },
        { value: 1000, argument: 'Barberías/Estéticas' },
        { value: 10000, argument: 'Fondas' },
        { value: 2900, argument: 'Paleterías' },
    ];

    const userRegistered = [
        { argument: 'Enero', value: 150 },
        { argument: 'Febrero', value: 350 },
        { argument: 'Marzo', value: 780 },
        { argument: 'Abril', value: 1000 },
        { argument: 'Mayo', value: 1234 },
        { argument: 'Junio', value: 1500 },
        { argument: 'Julio', value: 700 },
        { argument: 'Agosto', value: 400 },
        { argument: 'Septiembre', value: 300 },
        { argument: 'Octubre', value: 200 },
        { argument: 'Noviembre', value: 123 },
        { argument: 'Diciembre', value: 12 },
    ];

    const salesPerBusiness = [
        {
            argument: 'Enero',
            Abarrotes: 150,
            Fondas: 150,
            Ferreterías: 150,
        },
        {
            argument: 'Febrero',
            Abarrotes: 350,
            Paleterías: 350,
            Farmacias: 350,
        },
        {
            argument: 'Marzo',
            Fondas: 780,
            Abarrotes: 780,
            Farmacias: 780,
        },
        {
            argument: 'Abril',
            Fondas: 100,
            Ferreterías: 100,
            Farmacias: 100,
        },
        {
            argument: 'Mayo',
            'Barberías/Estéticas': 134,
            Ferreterías: 134,
            Paleterías: 124,
        },
        {
            argument: 'Junio',
            Fondas: 150,
            'Barberías/Estéticas': 150,
            Ferreterías: 150,
        },
        {
            argument: 'Julio',
            'Barberías/Estéticas': 700,
            Paleterías: 700,
            Abarrotes: 700,
        },
        {
            argument: 'Agosto',
            Farmacias: 400,
            Ferreterías: 400,
            Fondas: 400,
        },
        {
            argument: 'Septiembre',
            Abarrotes: 300,
            Fondas: 300,
            Paleterías: 300,
        },
        {
            argument: 'Octubre',
            Ferreterías: 200,
            Fondas: 200,
            'Barberías/Estéticas': 200,
        },
        {
            argument: 'Noviembre',
            Fondas: 123,
            Ferreterías: 123,
            Farmacias: 123,
        },
        {
            argument: 'Diciembre',
            Papelerías: 12,
            Fondas: 12,
            Paleterías: 12,
        },
    ];

    const architecturedUsers = [{ value: 'value', name: 'Registrados por mes' }];

    const businessKind = [
        { value: 100, argument: 'Farmacias' },
        { value: 50, argument: 'Abarrotes' },
        { value: 150, argument: 'Ferreterías' },
        { value: 40, argument: 'Papelerías' },
        { value: 10, argument: 'Barberías/Estéticas' },
        { value: 100, argument: 'Fondas' },
        { value: 29, argument: 'Paleterías' },
    ];

    const architecturedSales = [
        { value: 'Farmacias', name: 'Farmacias' },
        { value: 'Abarrotes', name: 'Abarrotes' },
        { value: 'Ferreterías', name: 'Ferreterías' },
        { value: 'Papelerías', name: 'Papelerías' },
        { value: 'Barberías/Estéticas', name: 'Barberías/Estéticas' },
        { value: 'Fondas', name: 'Fondas' },
        { value: 'Paleterías', name: 'Paleterías' },
    ];


    return (
        <div className={clsx(classes.root)}>
            <Grid container spacing={3}>
                <Grid item xs={false} sm={1} />
                <Grid item xs={12} sm={10}>
                    <Grid>
                        <DefaultTitle
                            className={clsx(classes.defaultTitle)}
                            text="Inicio"
                            variant="h5"
                            component="h2"
                        />
                        <hr />
                        <DefaultTitle
                            className={clsx(classes.defaultSubTitle)}
                            text="Sección especializada para brindar un estado rápido del uso de la aplicación."
                            variant="body2"
                        />
                        <br />
                        <br />
                    </Grid>
                    {loading
                        ? (
                            <Grid container className={clsx(classes.root)} spacing={3}>
                                <Grid item className={clsx(classes.progress)}>
                                    <DefaultProgress color="primary" />
                                </Grid>
                            </Grid>
                        )
                        : (
                            <Grid container className={clsx(classes.root)} spacing={3}>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Paper className={clsx(classes.chartPaper)}>
                                        <DefaultChart data={shopsSales} title="Ventas de negocios" subTitle="Enero" type="bar" />
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Paper className={clsx(classes.chartPaper)}>
                                        <DefaultChart data={userRegistered} title="Usuarios registrados" subTitle="2020" type="spline" architectureSources={architecturedUsers} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Paper className={clsx(classes.chartPaper)}>
                                        <DefaultChart data={businessKind} title="Tipos de negocios" subTitle="Actualidad" type="pie" />
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Paper className={clsx(classes.chartPaper)}>
                                        <DefaultChart data={salesPerBusiness} title="Ventas mensuales por negocio" subTitle="2020" architectureSources={architecturedSales} type="stackedBar" />
                                    </Paper>
                                </Grid>
                            </Grid>
                        )}
                </Grid>
                <Grid item xs={false} sm={1} />
            </Grid>
        </div>
    );
};

export default Home;
