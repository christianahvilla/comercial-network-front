/* eslint-disable camelcase */
/* eslint camelcase: ["error", {ignoreDestructuring: true}] */
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import uuid from 'uuid';
import DefaultTable from '../components/common/Table';
import DefaultTitle from '../components/common/Title';
import DefaultProgress from '../components/common/CircularProgress';
import {
    userFetchActions,
    userDeleteActions,
    userSaveActions,
    userUpdateActions,
} from '../actions/UserActions';
import DefaultSnackbar from '../components/common/Snackbar';
import mainStyles from './Style';

const User = () => {
    const [openAlert, setOpenAlert] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');
    const userState = useSelector((state) => state.userState);
    const dispacth = useDispatch();
    const classes = mainStyles();
    const {
        loading,
        users,
        status,
        error,
    } = userState;

    useEffect(() => {
        if (status === 200 || status === 201) {
            setMessage('¡Usuario guardado!');
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
            dispacth(userFetchActions());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClose = useCallback(() => {
        setOpenAlert(false);
    }, []);

    const columns = [
        {
            title: 'Nombre',
            field: 'name',
        },
        {
            title: 'Apellido',
            field: 'last_name',
        },
        {
            title: 'email',
            field: 'email',
        },
        {
            title: 'Telefono',
            field: 'phone',
        },
        {
            title: 'Rol',
            field: 'role',
            lookup: { Admin: 'Administrador', Merchant: 'Comerciante' },
        },
    ];

    const onDelete = (oldData) => {
        const { id } = oldData;
        dispacth(userDeleteActions(id));
    };

    const onAdd = async (newData) => {
        const {
            name, last_name, email, phone, role,
        } = newData;
        const newUser = {
            id: uuid(),
            password: 'password',
            name,
            last_name,
            email,
            phone,
            role,
        };
        return dispacth(userSaveActions(newUser));
    };

    const onUpdate = (newData) => {
        const {
            id, name, last_name, email, phone, role,
        } = newData;
        const user = {
            name,
            last_name,
            email,
            phone,
            role,
        };
        dispacth(userUpdateActions(user, id));
    };

    const onPasswordReset = (newData) => {
        const {
            id, name, last_name, email, phone, role,
        } = newData;
        const user = {
            password: 'password',
            name,
            last_name,
            email,
            phone,
            role,
        };
        dispacth(userUpdateActions(user, id));
    };

    const actions = [
        {
            icon: 'email',
            tooltip: 'Reiniciar contraseña',
            onClick: (event, rowData) => onPasswordReset(rowData),
        },
    ];

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
                            text="Usuarios"
                            variant="h5"
                            component="h2"
                        />
                        <hr />
                        <DefaultTitle
                            className={clsx(classes.defaultSubTitle)}
                            text="Sección especializada para la administración de los usuarios de la aplicación."
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
                                data={users}
                                columns={columns}
                                onAdd={onAdd}
                                onDelete={onDelete}
                                onUpdate={onUpdate}
                                actions={actions}
                            />
                        )}
                </Grid>
                <Grid item xs={false} sm={1} />
            </Grid>
        </div>
    );
};

export default User;
