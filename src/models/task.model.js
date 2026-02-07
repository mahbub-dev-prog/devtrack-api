const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  completed: { type: Boolean, default: false },
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" }
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);