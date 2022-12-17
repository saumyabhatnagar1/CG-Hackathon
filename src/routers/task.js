const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");

router.get("/tasks", async (req, res) => {
  try {
    const data = await Task.find({});
    res.send(data);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/tasks", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
