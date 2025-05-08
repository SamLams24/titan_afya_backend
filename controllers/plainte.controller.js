const Plainte = require("../models/plainte.model");

// Déposer une plainte
exports.deposerPlainte = async (req, res) => {
  const { partenaire_vise, message_plainte } = req.body;

  const plainte = await Plainte.create({
    patient: req.user._id,
    partenaire_vise,
    message_plainte
  });

  res.status(201).json({ message: "Plainte enregistrée", plainte });
};

// Récupérer toutes les plaintes (pour support)
exports.getPlaintes = async (req, res) => {
  const plaintes = await Plainte.find().populate("patient");
  res.json(plaintes);
};
