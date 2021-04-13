import express from "express";
import contact from "../Modal/Modal.js"; 

const router=express.Router();

export const getPosts = async (req, res) => { 
    try {
        res.send("Hello everyone");
         res.status(200);
    } catch (error) {
        console.log(error);
        res.status(404);
    }
}

export const createPost = async (req, res) => {
    console.log(req.body);
    const { email,pass } = req.body;

    const newPostMessage = new contact({email,pass})

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;