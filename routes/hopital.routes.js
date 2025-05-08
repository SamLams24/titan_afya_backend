const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const {
  creerPatient,
  addOrdonnance
} = require("../controllers/hopital.controller");

// Créer un patient
router.post("/patient", protect, creerPatient);

// Ajouter une ordonnance
router.post("/:patientId/ordonnance", protect, addOrdonnance);

module.exports = router;
