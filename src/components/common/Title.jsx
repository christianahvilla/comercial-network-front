import React from 'react';
import { Typography } from '@material-ui/core';

const DefaultTitle = (props) => {
    const {
        text, variant, component, className,
    } = props;
    return (
        <Typography
            className={className}
            gutterBottom
            variant={variant}
            component={component}
        >
            {text}
        </Typography>
    );
};

export default DefaultTitle;
