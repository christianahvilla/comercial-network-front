import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


const GenericModalImage = (props) => {
    const {
        open,
        save,
        close,
        change,
        url,
        destroy,
    } = props;

    return (
        <Dialog
            open={open}
            onClose={close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <IconButton edge="start" color="inherit" onClick={close} aria-label="close">
                    <CloseIcon />
                </IconButton>
                Subir imagen
            </DialogTitle>
            <DialogContent>
                {url
                    ? <img src={url} alt="" />
                    : (
                        <>
                            <input accept="image/*" className="" id="icon-button-file" type="file" hidden />
                            <label htmlFor="icon-button-file" onChange={change}>
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                        </>
                    )}
            </DialogContent>
            <DialogActions>
                <Button onClick={destroy} color="inherit">
                    Eliminar
                </Button>
                <Button onClick={save} color="primary" autoFocus>
                    Guardar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default GenericModalImage;
