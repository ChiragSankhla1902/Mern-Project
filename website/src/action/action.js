import * as api from "../api/api";

export const createcontact =(contact)=>async(dispatch)=>{
    try {
        const { data } = await api.Save_contact(contact);

        dispatch({ type: "CREATE", payload: data });

    } catch (error) {
        console.log(error);
    }
}