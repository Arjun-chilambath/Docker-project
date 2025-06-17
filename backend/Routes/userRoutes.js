import express from "express";
import User from "../models/user.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});

router.post("/", async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const newUser = new User({ email, username, password });
    await newUser.save();
    res.status(201).json({ message: "Account created successfully", newUser });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
});

export default router;
