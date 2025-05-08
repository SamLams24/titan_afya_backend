const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const {
  addDonSang,
  addAnalyseDon
} = require("../controllers/donSang.controller");

// Ajouter un don
router.post("/:patientId", protect, addDonSang);

// Ajouter une analyse à un don
router.post("/:patientId/don/:donId/analyse", protect, addAnalyseDon);

module.exports = router;
