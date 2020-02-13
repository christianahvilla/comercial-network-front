import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {
    FormControl,
    InputLabel,
    InputAdornment,
    OutlinedInput,
    IconButton,
    CardActions,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './Style';
import DefaultButton from '../common/Button';
import { loginActions } from '../../actions/AuthActions';
import DefaultTitle from '../common/Title';

const LoginForm = () => {
    const classes = useStyles();
    const error = useSelector((state) => state.authState.error);
    const [values, setValues] = useState({
        user: '',
        password: '',
        showPassword: false,
        validateUser: false,
        validatePassword: false,
    });
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            setValues({ ...values, validateUser: true, validatePassword: true });
        }
    }, [error]);

    const handleChange = (prop) => (event) => {
        setValues({
            ...values,
            [prop]: event.target.value,
            [`validate${prop.charAt(0).toUpperCase() + prop.slice(1)}`]: false,
        });
    };

    const validateCrendentials = () => {
        const rgexEmail = /^\S+@\S+\.\S+$/;
        const rgexPassword = /^[a-z]{8,}/;
        // /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[a-z\d@$!%*?&]{8,}/;
        const validateUser = !rgexEmail.test(values.user);
        const validatePassword = !rgexPassword.test(values.password);
        setValues({ ...values, validateUser, validatePassword });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const login = () => {
        validateCrendentials();
        if (!values.validateUser && !values.validatePassword) {
            const credentials = {
                email: values.user,
                password: values.password,
            };
            dispatch(loginActions(credentials)).then(() => (!error ? window.location.replace('/account/home') : null));
        }
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Card className={clsx(classes.card)}>
            <CardContent>
                <DefaultTitle
                    className={clsx(classes.margin)}
                    text="Acceder a Apartame"
                    variant="h5"
                    component="h2"
                />
                <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                >
                    <InputLabel>Usuario</InputLabel>
                    <OutlinedInput
                        type="email"
                        error={values.validateUser}
                        value={values.user}
                        onChange={handleChange('user')}
                        endAdornment={(
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                    disabled
                                >
                                    <AccountCircle />
                                </IconButton>
                            </InputAdornment>
                        )}
                        labelWidth={55}
                    />
                </FormControl>
                <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                >
                    <InputLabel htmlFor="outlined-adornment-password">
                        Contraseña
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        error={values.validatePassword}
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={(
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? (
                                        <Visibility />
                                    ) : (
                                        <VisibilityOff />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        )}
                        labelWidth={83}
                    />
                </FormControl>
                <DefaultButton
                    className={clsx(classes.recoverPassowrd)}
                    color="primary"
                    text="¿Olvidate tu contraseña?"
                />
            </CardContent>
            <CardActions className={clsx(classes.cardActions)}>
                <DefaultButton
                    className={clsx(classes.button)}
                    color="primary"
                    text="Acceder"
                    variant="contained"
                    onClick={login}
                />
            </CardActions>
        </Card>
    );
};

export default LoginForm;
