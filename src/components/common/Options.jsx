import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import IconButton from './IconButton';

const Options = props => (
    <ButtonToolbar>
        <IconButton
            variant="outline-primary"
            icon="fa fa-pencil"
            onClick={props.onEdit}
        />
        <IconButton
            variant="outline-danger"
            icon="fa fa-trash"
            onClick={props.onDelete}
        />
    </ButtonToolbar>
);

export default Options;
