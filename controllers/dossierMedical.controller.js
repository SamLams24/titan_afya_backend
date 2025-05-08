//dossierMedical.controller.js
const DossierMedical = require("../models/dossierMedical.model");
const User = require("../models/user.model");

// Créer un dossier médical pour un patient
exports.createDossier = async (req, res) => {
  const { patientId } = req.params;

  const existing = await DossierMedical.findOne({ patient: patientId });
  if (existing) {
    return res.status(400).json({ message: "Dossier déjà existant" });
  }

  const dossier = await DossierMedical.create({ patient: patientId });
  res.status(201).json(dossier);
};

// Consulter le dossier d’un patient
exports.getDossierByPatient = async (req, res) => {
  const { patientId } = req.params;

  const dossier = await DossierMedical.findOne({ patient: patientId }).populate(
    "patient"
  );
  if (!dossier) {
    return res.status(404).json({ message: "Dossier non trouvé" });
  }

  res.json(dossier);
};

// Ajouter un diagnostic
exports.addDiagnostic = async (req, res) => {
  const { patientId } = req.params;
  const { diagnostic } = req.body;

  const dossier = await DossierMedical.findOne({ patient: patientId });
  if (!dossier) {
    return res.status(404).json({ message: "Dossier non trouvé" });
  }

  dossier.diagnostics.push({ diagnostic });
  await dossier.save();

  res.json({ message: "Diagnostic ajouté", dossier });
};
