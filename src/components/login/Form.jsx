import React from 'react';
import DefaultButton from '../common/Button';
import {MDBIcon} from "mdbreact";
import {Form} from 'react-bootstrap';
import {login} from './Service';
import { useForm } from 'react-hook-form'

function LoginForm (props) {

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        login(data).then((response) => {
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('name', response.data.name);
            localStorage.setItem('role', response.data.role);
            window.location.reload();
        }).catch(
            (error)=>{
                console.log(error);
                alert('Usuario o Contraseña incorrectos');
            }
        );
    };

    return (
        <div style={{width: '40%', marginLeft: '30%', marginRight: '30%', marginTop: '50px'}}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label><MDBIcon icon="user-alt" /> Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="name@example.com" defaultValue="" ref={register({ required: true })}/>
                    {errors.email && <span style={{color:"red"}}>Campo requerido</span>}
                </Form.Group>
                <hr/>
                <Form.Group>
                    <Form.Label><MDBIcon icon="user-alt" /> Password</Form.Label>
                    <Form.Control type="password" name="password" ref={register({ required: true })}/>
                    {errors.password && <span style={{color:"red"}}>Campo requerido</span>}
                </Form.Group>            
                <hr/>
                <div style={{width: '100%', textAlign: 'center'}}>
                    <DefaultButton type="submit" variant="primary" text="Iniciar Sesión" onClick={() => handleSubmit()}/>
                </div>
            </Form>
        </div>
    );
}

export default LoginForm;