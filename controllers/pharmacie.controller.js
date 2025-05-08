const DossierMedical = require("../models/dossierMedical.model");

// Voir les ordonnances d’un patient
exports.getOrdonnances = async (req, res) => {
  const { patientId } = req.params;

  const dossier = await DossierMedical.findOne({ patient: patientId });

  if (!dossier) {
    return res.status(404).json({ message: "Dossier non trouvé" });
  }

  res.json(dossier.ordonnances);
};

// Valider une vente de médicament
exports.validerVente = async (req, res) => {
  const { patientId, ordonnanceId } = req.params;

  const dossier = await DossierMedical.findOne({ patient: patientId });

  if (!dossier) {
    return res.status(404).json({ message: "Dossier non trouvé" });
  }

  const ordonnance = dossier.ordonnances.id(ordonnanceId);

  if (!ordonnance) {
    return res.status(404).json({ message: "Ordonnance non trouvée" });
  }

  ordonnance.etat = "acheté";
  await dossier.save();

  res.json({ message: "Vente validée", ordonnance });
};
