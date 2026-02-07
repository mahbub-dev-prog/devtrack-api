const Task = require("../models/task.model");

exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ project: req.params.projectId });
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.json(task);
};