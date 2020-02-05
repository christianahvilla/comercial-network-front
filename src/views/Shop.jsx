import React, { useState } from 'react';
import Table from '../components/shop/Table';
import ShopModal from '../components/shop/Modal';
import DefaultButton from '../components/common/Button';
import DefaultTitle from '../components/common/Title';

const Shop = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="mainBody">
            <ShopModal
                show={show}
                handleClose={() => setShow(!show)}
                title="Crear tienda"
                text="aqui va el formulario"
            />
            <ShopModal title="Actualizar tienda" text="aqui va el formulario" />
            <DefaultTitle text="Tiendas" />
            <DefaultButton
                variant="primary"
                text="Crear tiendad"
                onClick={() => setShow(!show)}
            />
            <br />
            <Table />
        </div>
    );
};

export default Shop;
