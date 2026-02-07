const Project = require("../models/project.model");

exports.createProject = async (req, res) => {
  const project = await Project.create({
    ...req.body,
    owner: req.user
  });
  res.json(project);
};

exports.getProjects = async (req, res) => {
  const projects = await Project.find({ owner: req.user });
  res.json(projects);
};