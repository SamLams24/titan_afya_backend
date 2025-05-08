//auth.controller.js
const roleModel = require("../models/role.model");
const User = require("../models/user.model");
const generateToken = require("../utils/generateToken");

exports.register = async (req, res) => {
  const { fullName, email, phone, password, roleName } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "Utilisateur déjà existant" });
  }

  const role = await roleModel.findOne({ name: roleName });
  if (!role) {
    return res.status(400).json({ message: "Rôle invalide" });
  }

  const user = await User.create({
    fullName,
    email,
    phone,
    password,
    role: role._id
  });

  res.status(201).json({
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    role: role.name,
    token: generateToken(user._id)
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Email ou mot de passe invalide" });
  }

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return res.status(400).json({ message: "Email ou mot de passe invalide" });
  }

  res.json({
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    role: user.role,
    token: generateToken(user._id)
  });
};
