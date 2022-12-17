const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.get("/users", async (req, res) => {
  try {
    const data = await User.find({});
    res.send(data);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    if (data) return res.send(data);
    res.status(404).send("not found");
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/users/:id", async (req, res) => {
  try {
    const data = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!data) return res.status(404).send("not found");
    res.send(data);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const data = await User.findByIdAndDelete(req.params.id, {});
    if (!data) return res.status(404).send("not found");
    res.send(data);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
