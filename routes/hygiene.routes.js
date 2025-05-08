/**
 * @swagger
 * tags:
 *   name: Hygiène et Analyses Médicales
 *   description: Enregistrement des analyses médicales
 * /api/hygiene/{patientId}/analyse:
 *   post:
 *     summary: Ajouter une analyse hygiène
 *     tags: [Hygiène]
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
 *               type_analyse:
 *                 type: string
 *               resultat:
 *                 type: string
 *     responses:
 *       200:
 *         description: Analyse enregistrée
 */

const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const { addAnalyse } = require("../controllers/hygiene.controller");

// Ajouter une analyse médicale
router.post("/:patientId/analyse", protect, addAnalyse);

module.exports = router;
