import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DBCONNECTIONSTRING);
    console.log(`Database connected successfully......`);
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
