//Connecting to the database

import mongoose from "mongoose";


const Connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@mykart-web.ebredwe.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{});
        console.log('Database Connected Successfully');
    }
    catch(error)
    {
        console.log('Error connecting to server - ',error.message);
    }
}

export default Connection