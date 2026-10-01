import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    floor: { type: String, required: true },
    capacity: { type: Number, required: true },
    hourlyRate: { type: Number, required: true },
    amenities: [{ type: String }],
    bookingCount: { type: Number, default: 0 },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
);

const Room = mongoose.model("Room", roomSchema);

export default Room;
