/**
 * @swagger
 * tags:
 *   name: Don de Sang
 *   description: Gestion des dons de sang et analyses associées
 * /api/don-sang/{patientId}:
 *   post:
 *     summary: Enregistrer un don de sang
 *     tags: [Don de Sang]
 *     parameters:
 *       - name: patientId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantite:
 *                 type: number
 *     responses:
 *       200:
 *         description: Don enregistré
 */

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
