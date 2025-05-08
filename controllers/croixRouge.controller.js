const DossierMedical = require("../models/dossierMedical.model");

// Ajouter badge Croix-Rouge
exports.addBadgeCroixRouge = async (req, res) => {
  const { patientId } = req.params;
  const { numero_badge, groupe_sanguin } = req.body;

  const dossier = await DossierMedical.findOne({ patient: patientId });

  if (!dossier) {
    return res.status(404).json({ message: "Dossier non trouvé" });
  }

  dossier.croix_rouge = {
    numero_badge,
    groupe_sanguin,
    date: new Date()
  };

  await dossier.save();

  res.json({
    message: "Badge Croix-Rouge ajouté",
    croix_rouge: dossier.croix_rouge
  });
};
