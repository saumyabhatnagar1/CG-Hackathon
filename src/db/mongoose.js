const mongoose = require("mongoose");

const connnectionURL = "mongodb://127.0.0.1:27017";

mongoose.set("strictQuery", true);
mongoose.connect(`${connnectionURL}/hackathon-api`, {});
