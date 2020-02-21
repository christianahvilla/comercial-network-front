import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import uuid from 'uuid';
import DefaultTable from '../components/common/Table';
import DefaultTitle from '../components/common/Title';
import DefaultProgress from '../components/common/CircularProgress';
import {
    categoryFetchActions,
    categoryDeleteActions,
    categorySaveActions,
    categoryUpdateActions,
} from '../actions/CategoryActions';
import DefaultSnackbar from '../components/common/Snackbar';
import mainStyles from './Style';

const Category = () => {
    const [openAlert, setOpenAlert] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');
    const categoryState = useSelector((state) => state.categoryState);
    const dispacth = useDispatch();
    const classes = mainStyles();
    const {
        loading,
        categories,
        status,
        error,
    } = categoryState;

    useEffect(() => {
        if (status === 200 || status === 201) {
            setMessage('¡Categoría guardada!');
            setSeverity('success');
            setOpenAlert(true);
        } else if (error) {
            setMessage('¡Algo salió mal!');
            setSeverity('error');
            setOpenAlert(true);
        }
    }, [status, error]);

    useEffect(() => {
        if (!loading) {
            dispacth(categoryFetchActions());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClose = useCallback(() => {
        setOpenAlert(false);
    }, []);

    const columns = [
        {
            title: 'Nombre',
            field: 'category',
        },
    ];

    const onDelete = (oldData) => {
        const { id } = oldData;
        dispacth(categoryDeleteActions(id));
    };

    const onAdd = async (newData) => {
        const { category } = newData;
        const newCategory = {
            id: uuid(),
            category,
        };
        return dispacth(categorySaveActions(newCategory));
    };

    const onUpdate = (newData) => {
        const { category, id } = newData;
        const newCategory = {
            category,
        };
        dispacth(categoryUpdateActions(newCategory, id));
    };

    return (
        <div className={clsx(classes.root)}>
            <Grid container spacing={3}>
                <DefaultSnackbar
                    handleClose={handleClose}
                    message={message}
                    open={openAlert}
                    severity={severity}
                />
                <Grid item xs={false} sm={1} />
                <Grid item xs={12} sm={10}>
                    <Grid>
                        <DefaultTitle
                            className={clsx(classes.defaultTitle)}
                            text="Categorías"
                            variant="h5"
                            component="h2"
                        />
                        <hr />
                        <DefaultTitle
                            className={clsx(classes.defaultSubTitle)}
                            text="Sección especializada para la administración de las categorías de la aplicación."
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
                            <DefaultTable
                                data={categories}
                                columns={columns}
                                onAdd={onAdd}
                                onDelete={onDelete}
                                onUpdate={onUpdate}
                            />
                        )}
                </Grid>
                <Grid item xs={false} sm={1} />
            </Grid>
        </div>
    );
};

export default Category;
