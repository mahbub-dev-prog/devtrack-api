const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if(!user) return res.status(400).json({message:"Invalid credentials"});

  const match = await user.comparePassword(password);
  if(!match) return res.status(400).json({message:"Invalid credentials"});

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
};