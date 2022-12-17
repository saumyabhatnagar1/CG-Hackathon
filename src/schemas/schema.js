const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  number: {
    type: String,
    validate(value) {
      if (value.length != 10) throw new Error("Number is not valid");
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
    trim: true,
    validate(value) {},
  },
});

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  status: {
    type: Boolean,
    trim: true,
  },
});

module.exports = {
  userSchema,
  taskSchema,
};
