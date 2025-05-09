/**
 * @swagger
 * /api/pharmacie/{patientId}/ordonnances:
 *   get:
 *     summary: Voir ordonnances d'un patient
 *     tags: [Pharmacie]
 *     parameters:
 *       - name: patientId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Liste des ordonnances
 *
 * /api/pharmacie/{patientId}/ordonnances/{ordonnanceId}/vente:
 *   put:
 *     summary: Valider une vente de médicament
 *     tags: [Pharmacie]
 *     parameters:
 *       - name: patientId
 *         in: path
 *         required: true
 *       - name: ordonnanceId
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Vente validée
 */

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
