import Card from 'react-bootstrap/Card';
export default function SpecialityCard({specialityName}) {
    return(
        <Card>
            <Card.Body>{specialityName}</Card.Body>
        </Card>
    )
}