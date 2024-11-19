import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SelectedBeast(props) {
    return (
        <Modal 
        className="custom-modal" // Agregar bg-dark y text-light al Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
        onHide={props.handleClose}
        >
            <Modal.Header closeButton className="bg-dark text-light">
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.selectedBeast.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-light">
                <h4>{props.selectedBeast.title}</h4>
                <img src={props.selectedBeast.image_url} alt={props.selectedBeast.title} style={{ width: '100%' }} />
                <p>
                    {props.selectedBeast.description}
                </p>
            </Modal.Body>
            <Modal.Footer className="bg-dark text-light">
                <Button onClick={props.handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default SelectedBeast;