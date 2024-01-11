import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { createSubscriber } from '../services/NewsletterService';

export default function HomePage() {
    const navigate = useNavigate();

    const [validated, setValidated] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        const formData = new FormData(event.target), formDataObj = Object.fromEntries(formData.entries())

        setValidated(true);

        await createSubscriber(formDataObj)
        .then((response) => {
            response.json()
            console.log(response)
        })
        .then((data) => {
            navigate('/feedback', {state: {body: "Your are now subscribed to our newsletter.", type: "subscriber"}})
        })
    };

    return(
        <Container className='h-100 d-flex flex-col justify-content-center align-items-center'>
        <Row className="w-50 text-center">
             <Card>
                <Card.Body>
                    <Card.Title>Restaurant Newsletter</Card.Title>
                    <Card.Text>
                        Subscribe to our newsletter to get daily specialites of our best restaurats right in your mailbox.
                    </Card.Text>
                    <Form validated={validated} onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formSubscriber" >
                                    <Form.Control type="email" placeholder="name@example.com" name="email" required/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
                <p>Are your a restaurant owner? <Link to="/specialities">Click here</Link> to add your daily specialties.</p>
        </Row>
    </Container>
    )
}