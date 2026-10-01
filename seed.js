import "dotenv/config";
import mongoose from "mongoose";
import Room from "./models/Room.js";
import rooms from "./data/roomsData.js";

const seed = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  await Room.deleteMany({});
  await Room.insertMany(rooms);
  console.log("12 rooms added to the database");
  process.exit();
};

seed();