const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const { addBadgeAssurance } = require("../controllers/assurance.controller");

// Ajouter un badge assurance
router.post("/:patientId/badge", protect, addBadgeAssurance);

module.exports = router;
