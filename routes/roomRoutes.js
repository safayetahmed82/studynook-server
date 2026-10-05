import express from "express";
import Room from "../models/Room.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { search, amenities, minRate, maxRate, sort } = req.query;
    const limit = Number(req.query.limit) || 0;
    const filter = {};

    if (search) {
      const safeSearch = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      filter.name = { $regex: safeSearch, $options: "i" };
    }

    if (amenities) {
      filter.amenities = { $in: amenities.split(",") };
    }

    if (minRate || maxRate) {
      filter.hourlyRate = {};
      if (minRate) filter.hourlyRate.$gte = Number(minRate);
      if (maxRate) filter.hourlyRate.$lte = Number(maxRate);
    }

    let sortOption = { createdAt: -1 };
    if (sort === "rateLow") sortOption = { hourlyRate: 1 };
    if (sort === "rateHigh") sortOption = { hourlyRate: -1 };

    const rooms = await Room.find(filter).sort(sortOption).limit(limit);
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
router.get("/mine", authMiddleware, async (req, res) => {
  try {
    const rooms = await Room.find({ owner: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, description, image, floor, capacity, hourlyRate, amenities } =
      req.body;

    if (!name || !description || !image || !floor || !capacity || !hourlyRate) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const room = await Room.create({
      name,
      description,
      image,
      floor,
      capacity: Number(capacity),
      hourlyRate: Number(hourlyRate),
      amenities: amenities || [],
      owner: req.user.id,
    });

    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    if (!room.owner || room.owner.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "You can only edit your own rooms" });
    }

    const { name, description, image, floor, capacity, hourlyRate, amenities } =
      req.body;

    room.name = name || room.name;
    room.description = description || room.description;
    room.image = image || room.image;
    room.floor = floor || room.floor;
    room.capacity = capacity ? Number(capacity) : room.capacity;
    room.hourlyRate = hourlyRate ? Number(hourlyRate) : room.hourlyRate;
    room.amenities = amenities || room.amenities;

    await room.save();
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    if (!room.owner || room.owner.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "You can only delete your own rooms" });
    }

    await Room.findByIdAndDelete(req.params.id);
    res.json({ message: "Room deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
