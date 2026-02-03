import mongoose from "mongoose";


let isConnected = false;
const dbConnect = async () =>{
    if(isConnected) return;
    const mongodb_uri = process.env.MONGODB_URL;
    if(!mongodb_uri){
        throw new Error("DB url is not provided");
    }
    try {
        const conn = mongoose.connect(mongodb_uri);
        console.log("db Connected successfully");
        isConnected= true;
    } catch (error) {
        console.log(error);
    }
}

export default dbConnect;