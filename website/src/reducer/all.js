
const contact = (con=[],action)=>{

    switch (action.type) {
        case "CREATE":
            return[...con,action.payload];

    
        default:
            return con;
    }
};

export default contact;