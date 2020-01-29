import React from 'react';
import { Button } from 'react-bootstrap';

const IconButton = (props) => {
    return <Button className="btn-margin" type={props.type} variant={props.variant} onClick={props.onClick}><span className={props.icon} aria-hidden="true"></span></Button>
}

export default IconButton;