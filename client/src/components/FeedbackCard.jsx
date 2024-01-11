import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

export default function FeedbackCard({body, linkable}) {
    return(
        <Card className='w-50'>
            <Card.Title>Thank You!</Card.Title>
            <Card.Body>
                <p>
                    {body}
                </p>
                {linkable && <Link to="/">Back to Home</Link>}
            </Card.Body>
        </Card>
    )
}