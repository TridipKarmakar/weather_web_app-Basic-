import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const ConnectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n Mongo DB connected ! DB host ${ConnectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connection error ", error);
    process.exit;
  }
};

export default connectDB;
