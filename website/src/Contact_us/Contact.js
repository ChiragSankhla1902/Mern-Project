import React,{useState} from 'react';
import {useDispatch} from "react-redux";
import "./Contact.css";
import {createcontact} from "../action/action";
import {Form,Button, Jumbotron} from 'react-bootstrap';

const Contact = () => {
    const [contact1,setcontact]= useState({email:"",pass:""});
    const dispatch = useDispatch();

    const senddetails=async(e)=>{
        console.log(contact1)
        dispatch(createcontact(contact1));
        
    }


    return (
        <>
            <h1 className="head">Contact us</h1>
            <Jumbotron className="jumbopro2">
                <Form className="center">
                    <div>
                        <label className="lab">Name</label>
                        <br/>
                        <input className="inp" type="email"  onChange={(e)=> setcontact({...contact1,email:e.target.value})} />
                    </div>
                    <br/>
                    <div>
                        <label className="lab">Age</label>
                        <br/>
                        <input className="inp" type="password" onChange={(e)=> setcontact({...contact1,pass:e.target.value})}/>
                    </div>
                    <br/>
                    <Button variant="primary" type="submit" onClick={senddetails}>
                        Submit
                    </Button>
                </Form>
            </Jumbotron>
            <br/>
        </>
    )
}

export default Contact;
