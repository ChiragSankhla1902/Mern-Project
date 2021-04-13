import React from 'react'
import "./card.css";
// import imgcard from "../Images/card/city1.jpg"
import{Card,Button} from "react-bootstrap";
import history from "../History/History";


const Card1 = (props) => {
    
    return (
           
                <Card style={{ width: '18rem' }} className="effect">
                    <Card.Img variant="top" src={props.F} className="resize" />
                    
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary" onClick={() => history.push('/Service')}>Let's Travel</Button>
                    </Card.Body>
                </Card>
    )
}

export default Card1;
