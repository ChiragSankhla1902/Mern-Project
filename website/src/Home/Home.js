import React from 'react';
import "./Home.css";
import Card1 from "../Component/card/card";
import city from "../Component/Images/card/city1.jpg";
import city2 from "../Component/Images/card/city2.jpg";
import city3 from "../Component/Images/card/city3.jpg";
import city4 from "../Component/Images/card/city4.jpg";
import history from "../Component/History/History";
import city5 from "../Component/Images/card/city5.jpg";
import p from "../Component/Images/slide/slide1.jpg";
import p2 from "../Component/Images/slide/slide2.jpg";

import Slide1 from "../Component/slide/slide";
import {Container,Card,Button,Jumbotron,Row,Col} from "react-bootstrap";

const Home = () => {

    const pic=[city,city2,city3,city4,city5];



    return (
        <>
            <h1 className="head">Let's Travel</h1>
            <div className="size">
                <Slide1/>
            </div>
            <br/>
            <br/>
                <Jumbotron className="jumbopro">
                    <Container>
                        <Row>
                            <Col>
                                <img className="img-res1" src={p} alt="travel" />
                            </Col>
                            <Col>
                                <h1 className="heading">Hello World!!</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Card className="jumb-res" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={p2}  className="resize" />
                    
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary" onClick={() => history.push('/Service')}>Let's Travel</Button>
                    </Card.Body>
                </Card>

            <br/>
            <br/>
                    <Container>
                        <Row className="row">
                            <Col className="col">
                                <Card1  F={pic[0]}/>
                            </Col>
                            <Col className="col">
                                <Card1 F={pic[1]} />
                            </Col>
                            <Col className="col">
                                <Card1 F={pic[2]}/>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row className="row">
                            <Col className="col">
                                <Card1 F={pic[3]}/>
                            </Col>
                            <Col className="col"  >
                                <Card1 F={pic[4]} />
                            </Col>
                            <Col className="col" >
                                <Card1 F={pic[2]}/>
                            </Col>
                        </Row>
                    </Container>

            <br/>
            <br/>

        </>
    )
}

export default Home;
