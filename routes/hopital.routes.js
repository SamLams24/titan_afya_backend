/**
 * @swagger
 * tags:
 *   name: Hôpital
 *   description: Gestion des patients et ordonnances à l’hôpital
 * /api/hopital/patient:
 *   post:
 *     summary: Créer un patient
 *     tags: [Hôpital]
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
 *     responses:
 *       201:
 *         description: Patient créé
 *
 * /api/hopital/{patientId}/ordonnance:
 *   post:
 *     summary: Ajouter une ordonnance à un dossier médical
 *     tags: [Hôpital]
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
 *               medicament:
 *                 type: string
 *               posologie:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ordonnance ajoutée
 */

const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const {
  creerPatient,
  addOrdonnance
} = require("../controllers/hopital.controller");

// Créer un patient
router.post("/patient", protect, creerPatient);

// Ajouter une ordonnance
router.post("/:patientId/ordonnance", protect, addOrdonnance);

module.exports = router;
