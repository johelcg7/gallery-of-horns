import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HornedBeast(props) {
    const [favorito, setFavorito] = useState(0);

    const addFavorito = () => {
        setFavorito(favorito + 1);
        props.displayAsModal(props.title)
    };

    return (
        <>
            <Card  bg={"dark"} text={"light"} style={{ width: '18rem', margin: '0.5rem' }} onClick={addFavorito} >
                <Card.Img variant="top" src={props.imageUrl} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button variant="primary">❤️ Favorito: {favorito}</Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default HornedBeast;