

import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'




export default function ModalMovie({ data, show, close }) {
    return (
        <Modal show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Title :{data.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>data.release_date</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}> Close </Button>
                <Button variant="primary" > add To favarit</Button>
            </Modal.Footer>
        </Modal>
    )
};
