import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AddSpecialityModal({show, handleCancel, handleAdd}) {
    const [specialityName, setSpecialityName] = useState("")

    return(
        <Modal show={show} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new speciality</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Control
                type="text"
                id="name"
                placeholder="Name"
                defaultValue=""
                onChange={(e) => setSpecialityName(e.target.value)}
            />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleAdd(specialityName)}>
            Add 
          </Button>
        </Modal.Footer>
      </Modal>
    )
}