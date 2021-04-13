import React from 'react'
import{Navbar,Nav} from "react-bootstrap";
import{NavLink}from "react-router-dom";
import "./Navbar1.css";

const Navbar1 = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg"  className="py-3 down" bg="dark" variant="dark" sticky="top">
                <NavLink exact className="log" to="/" >Company Brand</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink activeClassName="active" exact to="/Home">Home</NavLink>
                    <NavLink activeClassName="active" exact to="/About">About us</NavLink>
                    <NavLink activeClassName="active" exact to="/contact">Contact us</NavLink>
                    <NavLink activeClassName="active" exact to="/Service">Our Services</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Navbar>


        </>
    )
}

export default Navbar1;
