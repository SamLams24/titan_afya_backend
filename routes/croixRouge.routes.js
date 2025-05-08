const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const { addBadgeCroixRouge } = require("../controllers/croixRouge.controller");

// Ajouter badge Croix-Rouge
router.post("/:patientId/badge", protect, addBadgeCroixRouge);

module.exports = router;
