/**
 * @swagger
 * tags:
 *   name: Plaintes
 *   description: Dépôt et consultation des plaintes patients
 * /api/plaintes:
 *   post:
 *     summary: Déposer une plainte
 *     tags: [Plainte]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               partenaire_vise:
 *                 type: string
 *               message_plainte:
 *                 type: string
 *     responses:
 *       201:
 *         description: Plainte déposée
 *
 * /api/plaintes:
 *   get:
 *     summary: Récupérer la liste des plaintes
 *     tags: [Plainte]
 *     responses:
 *       200:
 *         description: Liste des plaintes
 */

const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const { checkPermission } = require("../middlewares/permission.middleware");
const {
  deposerPlainte,
  getPlaintes
} = require("../controllers/plainte.controller");

// Déposer une plainte (patient)
router.post(
  "/",
  protect,
  checkPermission("can_handle_complaints"),
  deposerPlainte
);

// Voir toutes les plaintes (support)
router.get("/", protect, checkPermission("can_handle_complaints"), getPlaintes);

module.exports = router;
