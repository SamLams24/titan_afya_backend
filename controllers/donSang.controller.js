//donSang.controller.js
const DossierMedical = require("../models/dossierMedical.model");

// Ajouter un don de sang
exports.addDonSang = async (req, res) => {
  const { patientId } = req.params;
  const { quantite } = req.body;

  const dossier = await DossierMedical.findOne({ patient: patientId });

  if (!dossier) {
    return res.status(404).json({ message: "Dossier non trouvé" });
  }

  dossier.dons_sang.push({
    quantite
  });

  await dossier.save();

  res.json({ message: "Don de sang enregistré", dons_sang: dossier.dons_sang });
};

// Ajouter résultat d’analyse
exports.addAnalyseDon = async (req, res) => {
  const { patientId, donId } = req.params;
  const { resultat_analyse } = req.body;

  const dossier = await DossierMedical.findOne({ patient: patientId });

  if (!dossier) {
    return res.status(404).json({ message: "Dossier non trouvé" });
  }

  const don = dossier.dons_sang.id(donId);

  if (!don) {
    return res.status(404).json({ message: "Don de sang non trouvé" });
  }

  don.resultat_analyse = resultat_analyse;
  await dossier.save();

  res.json({ message: "Analyse ajoutée", don });
};
