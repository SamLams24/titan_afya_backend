const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const {
  getOrdonnances,
  validerVente
} = require("../controllers/pharmacie.controller");

// Voir ordonnances patient
router.get("/:patientId/ordonnances", protect, getOrdonnances);

// Valider vente médicament
router.put(
  "/:patientId/ordonnances/:ordonnanceId/vente",
  protect,
  validerVente
);

module.exports = router;
