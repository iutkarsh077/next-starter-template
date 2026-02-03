"use server";
import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";
import dbConnect from "@/helpers/dbConnect";
import { user } from "@/models/User"
import SendEmail from "@/helpers/SendEmail";

// const client = new MongoClient(process.env.MONGODB_URL!);

export interface IData {
  fname: string;
  address: string;
  email: string;
  english: number;
  maths: number;
  password: string;
}

export async function FormSubmit(data: IData) {
  try {
    // console.log("request data is: ", data);
    await dbConnect();
    // const db = client.db("brd");
    // const collection = db.collection("formsubmission");

    const email = data.email;

    const isEmailAlreadyExist = await user.findOne({email: email});

    if(isEmailAlreadyExist){
      return {message: "Email already exist", status: false}
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(data.password.trim(), salt);

    const result = await user.insertOne({
      fname: data.fname.trim(),
      email: data.email.trim(),
      address: data.address.trim(),
      english: data.english,
      maths: data.maths,
      password: hashedPassword,
    });

    if(!result){
      throw new Error("Failed to created User");
    }

    const userData = {
      fname:  result.fname,
      email: result.email,
      address: result.address,
      english: result.english,
      maths: result.maths,
      createdAt: new Date()
    }

    console.log(userData)

    const sentEmail = await SendEmail({ to: data.email, data: userData })

    if(sentEmail.status === false){
      // await user.deleteOne({email: data.email})
      throw new Error("Failed to send email")
    }
    console.log("result after db save: ", result);
    console.log("User data after result: ", userData);


    return { message: "Successfully form is submitted and email is sent", data: userData.fname, status: true };
  } catch (error) {
    console.log(error);
    return { message: "Internal Server error", status: false };
  }
}



export async function GetUserInfo(){
  try {
    await dbConnect();

    const getAllUser = await user.find({}, {
      fname: 1,
      email: 1,
      address: 1,
      english: 1,
      maths: 1
    });
    console.log(getAllUser);
    return { message: "Successfully got user details", data: JSON.parse(JSON.stringify(getAllUser)), status: true };
  } catch (error) {
    console.log(error);
    return { message: "Internal Server error", status: false };
  }
}