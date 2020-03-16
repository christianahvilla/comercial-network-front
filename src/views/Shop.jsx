/* eslint-disable camelcase */
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { Grid, IconButton } from '@material-ui/core';
import uuid from 'uuid';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import DefaultTable from '../components/common/Table';
import DefaultTitle from '../components/common/Title';
import DefaultProgress from '../components/common/CircularProgress';
import {
    shopFetchActions,
    shopDeleteActions,
    shopSaveActions,
    shopUpdateActions,
} from '../actions/ShopActions';
import { imageSaveActions, imageDeleteActions } from '../actions/ImageActions';
import DefaultSnackbar from '../components/common/Snackbar';
import mainStyles from './Style';
import GenericModalImage from '../components/common/ModalImage';

const Shop = () => {
    const [updateImage, setUpdateImage] = useState(null);
    const [fileSelected, setFileSelected] = useState(null);
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');
    const shopState = useSelector((state) => state.shopState);
    const dispacth = useDispatch();
    const classes = mainStyles();
    const {
        loading,
        shops,
        status,
        error,
        urlImage,
    } = shopState;

    useEffect(() => {
        if (status === 200 || status === 201) {
            setMessage('¡Tienda guardada!');
            setSeverity('success');
            setOpenAlert(true);
        } else if (error) {
            setMessage('¡Algo salió mal!');
            setSeverity('error');
            setOpenAlert(true);
        }
    }, [status, error]);

    useEffect(() => {
        if (!loading) {
            dispacth(shopFetchActions());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClose = useCallback(() => {
        setOpenAlert(false);
    }, []);

    const handleOpenModal = (rowData) => {
        setOpen(true);
        setUpdateImage(rowData);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    const buttonImage = (rowData) => {
        if (rowData.image === '' || !rowData.image) {
            return (
                <>
                    <IconButton onClick={() => handleOpenModal(rowData)} color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                </>
            );
        }
        return (
            <>
                <IconButton onClick={() => handleOpenModal(rowData)} color="primary" aria-label="upload picture" component="span">
                    <img src={rowData.image} data-img={rowData.image} style={{ width: 40, borderRadius: '50%' }} alt="" />
                </IconButton>
            </>
        );
    };

    const columns = [
        {
            field: 'image',
            render: (rowData) => buttonImage(rowData),
        },
        {
            title: 'Nombre',
            field: 'name',
        },
        {
            title: 'Comerciante',
            field: 'user_id',
        },
        {
            title: 'Email',
            field: 'email',
        },
        {
            title: 'Teléfono',
            field: 'phone',
        },
        {
            title: 'Sitio Web',
            field: 'web_page',
        },
        {
            title: 'Tipo',
            field: 'kind',
        },
        {
            title: 'Habilitado',
            field: 'enabled',
        },
        {
            title: 'Calle',
            field: 'street',
        },
        {
            title: 'Colonia',
            field: 'neighborhood',
        },
        {
            title: 'Código Postal',
            field: 'zip_code',
        },
        {
            title: 'Ciudad',
            field: 'city',
        },
        {
            title: 'Latitud',
            field: 'lat',
        },
        {
            title: 'Longitud',
            field: 'long',
        },
        {
            title: 'Límite de Productos',
            field: 'products_limit',
        },
        {
            title: 'Límite de Imágenes',
            field: 'images_limit',
        },
    ];

    const handleFileSelected = (event) => {
        setFileSelected(event.target.files[0]);
    };

    const onAddImage = () => {
        const formImage = new FormData();
        formImage.append('image', fileSelected, fileSelected.name);
        handleCloseModal();
        dispacth(imageSaveActions(formImage));
    };

    const onDeleteImage = () => {
        if (urlImage) {
            const imageName = urlImage.split('/');
            dispacth(imageDeleteActions(imageName[3]));
            handleCloseModal();
        }
    };

    useEffect(() => {
        if (urlImage && updateImage) {
            const {
                id,
                name,
                user_id,
                email,
                phone,
                web_page,
                kind,
                enabled,
                street,
                neighborhood,
                zip_code,
                city,
                lat,
                long,
                products_limit,
                images_limit,
            } = updateImage;
            const newShop = {
                image: urlImage === 204 ? '' : urlImage,
                name,
                user_id,
                email,
                phone,
                web_page,
                kind,
                enabled,
                street,
                neighborhood,
                zip_code,
                city,
                lat,
                long,
                products_limit,
                images_limit,
            };
            dispacth(shopUpdateActions(newShop, id));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [urlImage]);

    const onDelete = (oldData) => {
        const { id } = oldData;
        dispacth(shopDeleteActions(id));
    };

    const onAdd = async (newData) => {
        const {
            image,
            name,
            user_id,
            email,
            phone,
            web_page,
            kind,
            enabled,
            street,
            neighborhood,
            zip_code,
            city,
            lat,
            long,
            products_limit,
            images_limit,
        } = newData;
        const newShop = {
            id: uuid(),
            image,
            name,
            user_id,
            email,
            phone,
            web_page,
            kind,
            enabled,
            street,
            neighborhood,
            zip_code,
            city,
            lat,
            long,
            products_limit,
            images_limit,
        };
        return dispacth(shopSaveActions(newShop));
    };

    const onUpdate = (newData) => {
        const {
            id,
            image,
            name,
            user_id,
            email,
            phone,
            web_page,
            kind,
            enabled,
            street,
            neighborhood,
            zip_code,
            city,
            lat,
            long,
            products_limit,
            images_limit,
        } = newData;
        const newShop = {
            image,
            name,
            user_id,
            email,
            phone,
            web_page,
            kind,
            enabled,
            street,
            neighborhood,
            zip_code,
            city,
            lat,
            long,
            products_limit,
            images_limit,
        };
        dispacth(shopUpdateActions(newShop, id));
    };

    return (
        <div className={clsx(classes.root)}>
            <Grid container spacing={3}>
                <DefaultSnackbar
                    handleClose={handleClose}
                    message={message}
                    open={openAlert}
                    severity={severity}
                />
                <GenericModalImage
                    change={handleFileSelected}
                    open={open}
                    close={handleCloseModal}
                    save={onAddImage}
                    destroy={onDeleteImage}
                    url={updateImage ? updateImage.image : ''}
                />
                <Grid item xs={false} sm={1} />
                <Grid item xs={12} sm={10}>
                    <Grid>
                        <DefaultTitle
                            className={clsx(classes.defaultTitle)}
                            text="Tiendas"
                            variant="h5"
                            component="h2"
                        />
                        <hr />
                        <DefaultTitle
                            className={clsx(classes.defaultSubTitle)}
                            text="Sección especializada para la administración de las tiendas de la aplicación."
                            variant="body2"
                        />
                        <br />
                        <br />
                    </Grid>
                    {loading
                        ? (
                            <Grid container className={clsx(classes.root)} spacing={3}>
                                <Grid item className={clsx(classes.progress)}>
                                    <DefaultProgress color="primary" />
                                </Grid>
                            </Grid>
                        )
                        : (
                            <DefaultTable
                                data={shops}
                                columns={columns}
                                onAdd={onAdd}
                                onDelete={onDelete}
                                onUpdate={onUpdate}
                            />
                        )}
                </Grid>
                <Grid item xs={false} sm={1} />
            </Grid>
        </div>
    );
};

export default Shop;
