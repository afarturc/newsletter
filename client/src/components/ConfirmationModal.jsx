import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function ConfirmationModal({show, menu, handleCancel, handleSubmit}) {
    return(
        <Modal show={show} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>
            Confirmation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Your specialities for {menu.restaurant} at {menu.publish_date} are:</p>
            {menu["specialities_attributes"].map((speciality, idx) => {
                return(
                    <p key={idx}>{speciality.name}</p>
                )
            })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Submit 
          </Button>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    )
}