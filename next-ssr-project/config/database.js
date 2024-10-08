import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (connected) {
    console.log("Already connected");
    return;
  }
  try {
    // eslint-disable-next-line no-undef
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 15000, // Увеличиваем время ожидания до 15 секунд
      socketTimeoutMS: 45000,
    });
    connected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
