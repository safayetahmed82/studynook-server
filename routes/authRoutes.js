import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, photoURL, password } = req.body;

    if (!name || !email || !photoURL || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    if (!/[A-Z]/.test(password)) {
      return res
        .status(400)
        .json({ message: "Password must have an uppercase letter" });
    }

    if (!/[a-z]/.test(password)) {
      return res
        .status(400)
        .json({ message: "Password must have a lowercase letter" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      photoURL,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;