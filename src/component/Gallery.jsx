import HornedBeast from './HornedBeast'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'


function Gallery(props) {

    const [cuerno, setCuerno] = useState('');

    const handleSelectChange = (e) => {
        setCuerno(e.target.value);
    };

    {/*
    const filteredBeasts = cuerno
    ? props.allBeasts.filter(beast => beast.horns === parseInt(cuerno))
    : props.allBeasts;
        */}

    let filteredBeasts;
    if (cuerno) {
        filteredBeasts = props.allBeasts.filter(beast => beast.horns === parseInt(cuerno));
    } else {
        filteredBeasts = props.allBeasts;
    }

    return (
        <>
            <Form.Label>Filtra por número de cuernos</Form.Label>
            <Form.Select
            className="bg-dark text-light border-light" 
            aria-label="Default select example" 
            size="lg" 
            value={cuerno} 
            onChange={handleSelectChange}
            >
                <option value="">Elige el número de cuernos</option>
                <option value="1">Un cuerno</option>
                <option value="2">Dos cuernos</option>
                <option value="3">Tres cuernos</option>
                <option value="100">¡OMG muchos cuernos!</option>
            </Form.Select>

            <Container>
                <Row xs={2} sm={3} md={4} lg={5}>
                    {
                        filteredBeasts.map(beast => (
                            <HornedBeast key={beast._id}
                                title={beast.title}
                                imageUrl={beast.image_url}
                                description={beast.description}
                                displayAsModal={props.displayAsModal}
                            />
                        ))
                    }
                </Row>
            </Container>

        </>
    )
}
export default Gallery;