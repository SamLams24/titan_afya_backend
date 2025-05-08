const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const { addAnalyse } = require("../controllers/hygiene.controller");

// Ajouter une analyse médicale
router.post("/:patientId/analyse", protect, addAnalyse);

module.exports = router;
