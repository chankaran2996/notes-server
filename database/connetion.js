import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to MONGODB");
  } catch (err) {
    throw err;
  }
};

export default connectDB;