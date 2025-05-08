//hygiene.controller.js
const DossierMedical = require("../models/dossierMedical.model");

// Ajouter un bilan ou analyse
exports.addAnalyse = async (req, res) => {
  const { patientId } = req.params;
  const { type_analyse, resultat } = req.body;

  const dossier = await DossierMedical.findOne({ patient: patientId });

  if (!dossier) {
    return res.status(404).json({ message: "Dossier non trouvé" });
  }

  dossier.analyses.push({
    type_analyse,
    resultat
  });

  await dossier.save();

  res.json({ message: "Analyse ajoutée", analyses: dossier.analyses });
};
