"use server";
import { MongoClient } from "mongodb";

const client = new MongoClient(env.MONGODB_URL!);

export async function GetInformation(){
    try {
        const db =  client.db("brd");
        const collection = db.collection("customtext");

        const result = await collection.find({}).toArray();

        return { message: "Successfully data is fetched", data: JSON.stringify(result),  status: true };
    } catch (error) {
        console.log(error);
        return {message: "Internal Server error", status: false}
    }
}