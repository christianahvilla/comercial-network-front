import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

const DefaultAlert = (props) => {
    const { message } = props;

    return (
        <MuiAlert elevation={6} variant="filled" {...props}>
            {message}
        </MuiAlert>
    );
};

export default DefaultAlert;
