import React from 'react';
import "./About.css";
import p1 from "../Component/Images/team/person1.jpg";
import p2 from "../Component/Images/team/person2.jpg";
import p3 from "../Component/Images/team/person3.jpg";
import p4 from "../Component/Images/team/person4.jpg";
import p5 from "../Component/Images/team/person5.jpg";
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <h1 className="head">Know About our Team</h1>
            <br/>
            <br/>
            <Container>
                <Row className="row1">
                    <Col className="pix"> <img src={p1} alt="alex" height="180" width="200" className="round"/> </Col>
                    <br/>
                    <Col className="text"> <h3>Alex Kumar</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </Col>
                </Row>
                <br/>
                <Row className="row1">
                    <Col className="pix1"> <img src={p2} alt="alex" height="180" width="200" className="round"/> </Col>
                    <br/>
                    <Col className="text"> <h3 className="pix2">Arnold Singh</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </Col>
                </Row>
                <br/>
                <Row className="row1">
                    <Col className="pix"> <img src={p3} alt="alex" height="180" width="200" className="round"/> </Col>
                    <br/>
                    <Col className="text"> <h3>Lufer Sharma </h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </Col>
                </Row>
                <br/>
                <Row className="row1">
                    <Col className="pix1"> <img src={p4} alt="alex" height="180" width="200" className="round"/> </Col>
                    <br/>
                    <Col className="text"> <h3 className="pix2">Angel Priya</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </Col>
                </Row>
                <br/>
                <Row className="row1">
                    <Col className="pix"> <img src={p5} alt="alex" height="180" width="200" className="round"/> </Col>
                    <br/>
                    <Col className="text"> <h3> Muni Rai </h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </Col>
                </Row>
                <br/>
            </Container>
            <br/>
            {/* {<iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13774.58327360481!2d77.95188323188995!3d30.332590708452408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092a9ce8a03a1f%3A0x2e31206d44d9f341!2sPrem%20Nagar%2C%20Dehradun%2C%20Uttarakhand%20248007!5e0!3m2!1sen!2sin!4v1616254625413!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>} */}
        </div>
    )
}

export default About;
