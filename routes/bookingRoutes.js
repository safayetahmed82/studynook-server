import express from "express";
import Booking from "../models/Booking.js";
import Room from "../models/Room.js";
import User from "../models/User.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { roomId, date, startHour, endHour, note } = req.body;
    const start = Number(startHour);
    const end = Number(endHour);

    if (!roomId || !date || !start || !end) {
      return res
        .status(400)
        .json({ message: "Please fill in all booking details" });
    }

    const today = new Date().toISOString().slice(0, 10);
    if (date < today) {
      return res
        .status(400)
        .json({ message: "Please choose today or a future date" });
    }

    if (start < 8 || start > 20 || end > 21 || end <= start) {
      return res
        .status(400)
        .json({ message: "Please choose a valid time slot" });
    }

    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    const conflict = await Booking.findOne({
      room: roomId,
      date: date,
      status: "confirmed",
      startHour: { $lt: end },
      endHour: { $gt: start },
    });

    if (conflict) {
      return res
        .status(400)
        .json({ message: "This room is already booked for that time" });
    }

    const booking = await Booking.create({
      room: roomId,
      user: req.user.id,
      date,
      startHour: start,
      endHour: end,
      totalCost: (end - start) * room.hourlyRate,
      note: note || "",
    });

    await User.findByIdAndUpdate(req.user.id, {
      $push: { bookings: booking._id },
    });
    await Room.findByIdAndUpdate(roomId, { $inc: { bookingCount: 1 } });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
router.get("/mine", authMiddleware, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate("room", "name image")
      .sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.patch("/:id/cancel", authMiddleware, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    if (booking.user.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "You can only cancel your own bookings" });
    }

    if (booking.status === "cancelled") {
      return res.status(400).json({ message: "Booking is already cancelled" });
    }

    const today = new Date().toISOString().slice(0, 10);
    if (booking.date < today) {
      return res
        .status(400)
        .json({ message: "Past bookings cannot be cancelled" });
    }

    booking.status = "cancelled";
    await booking.save();

    await User.findByIdAndUpdate(req.user.id, {
      $pull: { bookings: booking._id },
    });
    await Room.findByIdAndUpdate(booking.room, { $inc: { bookingCount: -1 } });

    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
