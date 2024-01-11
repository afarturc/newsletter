import Container from 'react-bootstrap/Container';
import FeedbackCard from "../components/FeedbackCard";
import { Link, useLocation } from 'react-router-dom'

export default function FeedbackPage() {
    const location = useLocation()
    const { body, type } = location.state
    
    return(
        <Container className='h-100 d-flex flex-column mh-80 justify-content-center align-items-center text-center'>
            <FeedbackCard body={body} linkable={type == "menu"}/>
            {type == "subscriber" && <p>Are you a restaurant owner? <Link to="/">Click here</Link> to add your daily specialities.</p>}
        </Container>
    )
}