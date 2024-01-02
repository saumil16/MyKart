//Connecting to the database

import mongoose from "mongoose";


const Connection = async (URL) => {

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