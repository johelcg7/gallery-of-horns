import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

function SelectedBeast(props) {

    const [favorites, setFavorites] = useState(0);


    const addFavorites = () => {
        setFavorites(favorites + 1);
    }

    return (
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>

            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={props.imageUrl} onClick={addFavorites} />
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>
                                {props.description}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">💓 Favoritos: {favorites}</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div >
    )
}

export default SelectedBeast;