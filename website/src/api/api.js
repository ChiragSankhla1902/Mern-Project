import axios from 'axios';

const url = 'http://localhost:5000/por/contactus';

export const Save_contact = (newcontact)=>axios.post(url,newcontact);