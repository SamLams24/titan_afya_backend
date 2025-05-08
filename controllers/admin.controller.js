//admin.controller.js
const User = require("../models/user.model");
const Role = require("../models/role.model");
const DossierMedical = require("../models/dossierMedical.model");
const Plainte = require("../models/plainte.model");

// Voir tous les comptes
exports.getAllUsers = async (req, res) => {
  const users = await User.find().populate("role");
  res.json(users);
};

// Créer un compte structure
exports.createStructure = async (req, res) => {
  const { fullName, email, phone, password, roleName } = req.body;

  const role = await Role.findOne({ name: roleName });
  if (!role) {
    return res.status(400).json({ message: "Rôle invalide" });
  }

  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(400).json({ message: "Email déjà utilisé" });
  }

  const structure = await User.create({
    fullName,
    email,
    phone,
    password,
    role: role._id
  });

  res.status(201).json({ message: "Structure créée", structure });
};

// Statistiques globales
exports.getStats = async (req, res) => {
  const nbUsers = await User.countDocuments();
  const nbDossiers = await DossierMedical.countDocuments();
  const nbPlaintes = await Plainte.countDocuments();

  res.json({
    utilisateurs: nbUsers,
    dossiers_medicaux: nbDossiers,
    plaintes: nbPlaintes
  });
};
