import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HornedBeast(props) {
    const [favorites, setFavorites] = useState(0);

    const addFavorites = () => {
        setFavorites(favorites + 1);
        
    }
    return (
        <>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imageUrl} onClick={addFavorites} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button variant="primary">💓 Favoritos: {favorites}</Button>
                </Card.Body>
            </Card>


        </>
    )
}

export default HornedBeast;