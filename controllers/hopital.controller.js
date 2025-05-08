//hopital.controller.js
const User = require("../models/user.model");
const DossierMedical = require("../models/dossierMedical.model");
const Role = require("../models/role.model");

// Créer un patient
exports.creerPatient = async (req, res) => {
  const { fullName, email, phone, password } = req.body;

  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(400).json({ message: "Email déjà utilisé" });
  }

  const patientRole = await Role.findOne({ name: "patient" });

  const patient = await User.create({
    fullName,
    email,
    phone,
    password,
    role: patientRole._id
  });

  res.status(201).json({ message: "Patient créé", patient });
};

// Ajouter une ordonnance à un dossier
exports.addOrdonnance = async (req, res) => {
  const { patientId } = req.params;
  const { medicament, posologie } = req.body;

  const dossier = await DossierMedical.findOne({ patient: patientId });

  if (!dossier) {
    return res.status(404).json({ message: "Dossier non trouvé" });
  }

  dossier.ordonnances.push({
    medicament,
    posologie,
    etat: "non acheté"
  });

  await dossier.save();

  res.json({ message: "Ordonnance ajoutée", ordonnances: dossier.ordonnances });
};
