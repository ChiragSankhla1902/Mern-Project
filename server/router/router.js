import express from "express";
import {getPosts,createPost} from "../Controller/controller.js";

const route = express.Router();

route.get('/',getPosts);
route.post('/contactus',createPost);

export default route;