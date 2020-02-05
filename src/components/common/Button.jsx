import React from 'react';
import { Button } from 'react-bootstrap';

const DefaultButton = props => (
    <Button type={props.type} variant={props.variant} onClick={props.onClick}>
        {props.text}
    </Button>
);

export default DefaultButton;
