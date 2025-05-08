/**
 * @swagger
 * tags:
 *   name: Administration
 *   description: Gestion des utilisateurs et statistiques système
 * /api/admin/utilisateurs:
 *   get:
 *     summary: Voir la liste de tous les utilisateurs
 *     tags: [Administration]
 *     responses:
 *       200:
 *         description: Liste des utilisateurs
 *
 * /api/admin/create-account:
 *   post:
 *     summary: Créer un compte structure
 *     tags: [Administration]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *               roleName:
 *                 type: string
 *     responses:
 *       201:
 *         description: Structure créée
 *
 * /api/admin/stats:
 *   get:
 *     summary: Voir les statistiques globales
 *     tags: [Administration]
 *     responses:
 *       200:
 *         description: Statistiques récupérées
 */

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
