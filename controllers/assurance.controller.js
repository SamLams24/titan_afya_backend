//assurance.controller.js
const DossierMedical = require("../models/dossierMedical.model");

// Ajouter un badge assurance
exports.addBadgeAssurance = async (req, res) => {
  const { patientId } = req.params;
  const { prime, couverture } = req.body;

  const dossier = await DossierMedical.findOne({ patient: patientId });

  if (!dossier) {
    return res.status(404).json({ message: "Dossier non trouvé" });
  }

  dossier.assurance = {
    prime,
    couverture,
    date: new Date()
  };

  await dossier.save();

  res.json({ message: "Badge assurance ajouté", assurance: dossier.assurance });
};
