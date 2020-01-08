import React from 'react'
import {Modal} from 'react-bootstrap';
import DefaultButton from '../common/Button';


const ShopModal = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{props.text}</p>
            </Modal.Body>
            <Modal.Footer>
                <DefaultButton variant="danger" text="Cancelar" onClick={props.handleClose}></DefaultButton>
                <DefaultButton variant="primary" text="Aceptar" onClick={() => console.log('aqui')}></DefaultButton>
            </Modal.Footer>
        </Modal>
    );
}

export default ShopModal;