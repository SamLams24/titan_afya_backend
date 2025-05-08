/**
 * @swagger
 * tags:
 *   name: Assurance
 *   description: Attribution de badges assurances aux patients
 * /api/assurance/{patientId}/badge:
 *   post:
 *     summary: Ajouter un badge assurance
 *     tags: [Assurance]
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
 *               prime:
 *                 type: string
 *               couverture:
 *                 type: string
 *     responses:
 *       200:
 *         description: Badge ajouté
 */

const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const { addBadgeAssurance } = require("../controllers/assurance.controller");

// Ajouter un badge assurance
router.post("/:patientId/badge", protect, addBadgeAssurance);

module.exports = router;
