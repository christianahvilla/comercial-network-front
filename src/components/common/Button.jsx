import React from 'react';
import Button from '@material-ui/core/Button';

const DefaultButton = (props) => {
    const {
        variant, color, onClick, text, className,
    } = props;
    return (
        <Button
            className={className}
            color={color}
            variant={variant}
            onClick={onClick}
        >
            {text}
        </Button>
    );
};

export default DefaultButton;
