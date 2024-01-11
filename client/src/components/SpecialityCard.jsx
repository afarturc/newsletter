import Card from 'react-bootstrap/Card';

export default function SpecialityCard({specialityName}) {
    return(
        <Card className='mb-3'>
            <Card.Body>{specialityName}</Card.Body>
        </Card>
    )
}