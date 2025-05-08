/**
 * @swagger
 * tags:
 *   name: Croix-Rouge
 *   description: Attribution de badges Croix-Rouge aux patients
 * /api/croix-rouge/{patientId}/badge:
 *   post:
 *     summary: Ajouter un badge Croix-Rouge
 *     tags: [Croix-Rouge]
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
 *               numero_badge:
 *                 type: string
 *               groupe_sanguin:
 *                 type: string
 *     responses:
 *       200:
 *         description: Badge ajouté
 */

const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const { addBadgeCroixRouge } = require("../controllers/croixRouge.controller");

// Ajouter badge Croix-Rouge
router.post("/:patientId/badge", protect, addBadgeCroixRouge);

module.exports = router;
