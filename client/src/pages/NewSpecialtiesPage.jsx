import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import SpecialityCard from '../components/SpecialityCard';
import AddSpecialityModal from '../components/AddSpecialityModal';
import ConfirmationModal from '../components/ConfirmationModal';

import { createMenu } from '../services/NewsletterService';

export default function NewSpecialtiesPage() {
    const [menu, setMenu] = useState(null)

    const [specialities, setSpecialities] = useState([]);
    const [openAddSpeciality, setOpenAddSpeciality] = useState(false);

    const handleAddSpeciality = (specialityName) => {
        setSpecialities([...specialities, {name: specialityName}])
        setOpenAddSpeciality(!openAddSpeciality)
    }

    const [validated, setValidated] = useState(false);

    const [openConfirmation, setOpenConfirmation] = useState(false);

    const handleConfirmation = async () => {
        console.log(menu)
        await createMenu(menu)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // Handle data
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        const formData = new FormData(event.target), formDataObj = Object.fromEntries(formData.entries())

        formDataObj["specialities_attributes"] = specialities

        console.log(formDataObj)
        setMenu(formDataObj)
        setOpenConfirmation(!openConfirmation)

        setValidated(true);
    };

    return(
        <Container>
            <Row className="justify-content-md-center">
                <Card>
                <Card.Body>
                    <Card.Title>Your specialties</Card.Title>
                    <Card.Text>
                        Add your information and daily specialties.
                    </Card.Text>
                    <Form validated={validated} onSubmit={handleSubmit}>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                required
                                name="publish_date"
                                type="date"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Restaurant Name</Form.Label>
                            <Form.Control
                                required
                                name="restaurant"
                                type="text"
                                placeholder="Restaurant Name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        {specialities && specialities.map((speciality, idx) => {return(
                            <SpecialityCard key={idx} specialityName={speciality.name}/>
                        )})}
                        <Button variant="primary" onClick={() => setOpenAddSpeciality(!openAddSpeciality)}>Add More</Button>
                        <Button type="submit">Submit</Button>
                        <Button type="reset">Reset</Button>
                    </Form>
                </Card.Body>
            </Card>
            </Row>
            <AddSpecialityModal show={openAddSpeciality} handleCancel={() => setOpenAddSpeciality(!openAddSpeciality)} handleAdd={(specialityName) => handleAddSpeciality(specialityName)}/>
            {openConfirmation && <ConfirmationModal show={openConfirmation} menu={menu} handleCancel={() => setOpenConfirmation(!openConfirmation)} handleSubmit={handleConfirmation}/>}
        </Container>
    )
}