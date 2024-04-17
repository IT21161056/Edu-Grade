import mongoose from "mongoose";
import  dotenv from 'dotenv' 
dotenv.config()

const ConnectDb = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => console.log(err))
    }catch(err){
        console.log(err)
    }
}

export default ConnectDb