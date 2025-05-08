const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const {
  getAllUsers,
  createStructure,
  getStats
} = require("../controllers/admin.controller");

// Voir tous les comptes
router.get("/utilisateurs", protect, getAllUsers);

// Créer une structure
router.post("/create-account", protect, createStructure);

// Statistiques
router.get("/stats", protect, getStats);

module.exports = router;
