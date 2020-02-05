import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import DefaultButton from '../common/Button';
import { login } from './Service';
import './assets/style.css';

function LoginForm(props) {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        login(data)
            .then(response => {
                localStorage.setItem(
                    'access_token',
                    response.data.access_token
                );
                localStorage.setItem('name', response.data.name);
                localStorage.setItem('role', response.data.role);
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
                alert('Usuario o Contraseña incorrectos');
            });
    };

    return (
        <div id="loginForm">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>
                        <i className="fa fa-user-circle" aria-hidden="true" />{' '}
                        Email
                    </Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        defaultValue=""
                        ref={register({ required: true })}
                    />
                    {errors.email && (
                        <span className="requiredText">Campo requerido</span>
                    )}
                </Form.Group>
                <hr />
                <Form.Group>
                    <Form.Label>
                        <i className="fa fa-lock" aria-hidden="true" /> Password
                    </Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        ref={register({ required: true })}
                    />
                    {errors.password && (
                        <span className="requiredText">Campo requerido</span>
                    )}
                </Form.Group>
                <hr />
                <div id="sumbitBtn">
                    <DefaultButton
                        type="submit"
                        variant="primary"
                        text="Iniciar Sesión"
                        onClick={() => handleSubmit()}
                    />
                </div>
            </Form>
        </div>
    );
}

export default LoginForm;
