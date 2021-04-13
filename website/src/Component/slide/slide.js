import React from 'react';
import p1 from "../Images/slide/slide1.jpg";
import p2 from "../Images/slide/slide2.jpg";
import p3 from "../Images/slide/slide3.jpg";
import history from "../History/History";
import Carousel from 'react-bootstrap/Carousel';
import "./slide.css"

const Slide1 = () => {
    return (
        <Carousel > 
                <Carousel.Item interval={1000} onClick={()=>history.push("/Services")}>
                    <img
                    className="d-block w-100"
                    src={p1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="slide">Travel to Explore</h3>
                    <p className="slide" >Travel with Box water</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}  onClick={()=>history.push("/Services")} >
                    <img
                    className="d-block w-100"
                    src={p2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3 className="slide">Be a mountainer</h3>
                    <p className="slide" >Visit North East</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  onClick={()=>history.push("/Services")}>
                    <img
                    className="d-block w-100"
                    src={p3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3  className="slide" style={{color:"black"}}>Be a Beach person</h3>
                    <p  className="slide" style={{color:"black"}}>explore Gods own country</p>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
    )
}

export default Slide1;
