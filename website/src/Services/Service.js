import React from 'react';
import {Jumbotron,Row,Col,Container, Button} from "react-bootstrap";

import history from "../Component/History/History";
import p from "../Component/Images/slide/slide2.jpg";
import p3 from "../Component/Images/slide/slide3.jpg";
import "./Service.css";
import p1 from "../Component/Images/card/city2.jpg";


const Service = () => {
    return (
        <>
            <div>
                <h1 className="head">Our Services</h1>
            </div>
            <Jumbotron className="jumbopro">
                <Container>
                    <Row>
                        <Col>
                            <img className="img-res" src={p} alt="travel" height="300px" width="500px"/>
                        </Col>
                        <Col>
                            <h1>Hello World!!</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                             t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                            </p>
                            <Button variant="primary" onClick={()=>history.push('/contact')}> Contact us</Button>
                        </Col>
                    </Row>
                </Container>                        
            </Jumbotron>

            <br/>


            <Jumbotron className="jumbopro1">
                <Container>
                    <Row>
                    <Col>
                            <h1>Hello World!!</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                             t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                            </p>
                            <Button style={{background:"black"}} onClick={()=>history.push('/contact')}> Contact us</Button>
                        </Col>
                        <Col>
                            <img className="img-res" src={p1} alt="travel" height="300px" width="500px"/>
                        </Col>
                    </Row>
                </Container>                        
            </Jumbotron>
            <br/>
            <Jumbotron className="jumbopro1 res-ser">
                <Container>
                    <Row>
                        <Col>
                            <img className="img-res" src={p1} alt="travel" height="300px" width="500px"/>
                        </Col>
                        <Col>
                            <h1>Hello World!!</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                             t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                            </p>
                            <Button  className="bl" onClick={()=>history.push('/contact')}> Contact us</Button>
                        </Col>
                    </Row>
                </Container>                        
            </Jumbotron>
            <br/>

            <Jumbotron className="jumbopro">
                <Container>
                    <Row>
                        <Col>
                            <img className="img-res" src={p3} alt="travel" height="300px" width="500px"/>
                        </Col>
                        <Col>
                            <h1>Hello World!!</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                             t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                            </p>
                            <Button  className="bl" onClick={()=>history.push('/contact')}> Contact us</Button>
                        </Col>
                    </Row>
                </Container>                        
            </Jumbotron>
            <br/>





        </>
    )
}

export default Service;
