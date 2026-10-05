import "dotenv/config";
import mongoose from "mongoose";
import Room from "./models/Room.js";

const run = async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  await Room.updateOne({ name: "Quiet Corner Pod" }, { image: "https://media.istockphoto.com/id/481911582/photo/office-interior.jpg?s=2048x2048&w=is&k=20&c=mOem4dgzpBcYSxDfuRLUP3VBYEqVsuCc9rsQ8MW_sCc=" });
  await Room.updateOne({ name: "Group Study Hub" }, { image: "https://media.istockphoto.com/id/2044008095/photo/group-of-friends-busy-working-sitting-at-coffee-shop-table.jpg?s=2048x2048&w=is&k=20&c=nIfCW8ulZE52jH0369F4s0VfBnvUlgtXsTE4C2ArNDs=" });
  await Room.updateOne({ name: "Silent Reading Room" }, { image: "https://plus.unsplash.com/premium_photo-1664299728921-02e66e6146b4?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" });
  await Room.updateOne({ name: "Presentation Practice Room" }, { image: "https://plus.unsplash.com/premium_photo-1661301075272-c172fecd2a3b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" });
  await Room.updateOne({ name: "Window Light Studio" }, { image: "https://plus.unsplash.com/premium_photo-1671247953201-2fdc17af6692?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" });
  await Room.updateOne({ name: "Thesis Writing Den" }, { image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" });
  await Room.updateOne({ name: "Collaboration Lounge" }, { image: "https://plus.unsplash.com/premium_photo-1682608388956-11f98495e165?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" });
  await Room.updateOne({ name: "Exam Prep Cabin" }, { image: "https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" });
  await Room.updateOne({ name: "Solo Focus Booth" }, { image: "https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" });
  await Room.updateOne({ name: "Tech Project Room" }, { image: "https://media.istockphoto.com/id/481911582/photo/office-interior.jpg?s=2048x2048&w=is&k=20&c=mOem4dgzpBcYSxDfuRLUP3VBYEqVsuCc9rsQ8MW_sCc=" });
  await Room.updateOne({ name: "Garden View Room" }, { image: "https://media.istockphoto.com/id/2044008095/photo/group-of-friends-busy-working-sitting-at-coffee-shop-table.jpg?s=2048x2048&w=is&k=20&c=nIfCW8ulZE52jH0369F4s0VfBnvUlgtXsTE4C2ArNDs=" });
  await Room.updateOne({ name: "Seminar Room Alpha" }, { image: "https://plus.unsplash.com/premium_photo-1661301075272-c172fecd2a3b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" });

  console.log("Room images updated");
  process.exit();
};

run();