/**
 * @swagger
 * /api/dossier-medical/{patientId}:
 *   post:
 *     summary: Créer un dossier médical
 *     tags: [Dossier Médical]
 *     parameters:
 *       - name: patientId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Dossier créé
 *
 * /api/dossier-medical/{patientId}/diagnostic:
 *   post:
 *     summary: Ajouter un diagnostic
 *     tags: [Dossier Médical]
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
 *               diagnostic:
 *                 type: string
 *     responses:
 *       200:
 *         description: Diagnostic ajouté
 */

const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const { checkPermission } = require("../middlewares/permission.middleware");
const {
  createDossier,
  getDossierByPatient,
  addDiagnostic
} = require("../controllers/dossierMedical.controller");

// Créer un dossier médical
router.post(
  "/:patientId",
  protect,
  checkPermission("can_manage_hospital"),
  createDossier
);

// Consulter le dossier d’un patient
router.get(
  "/:patientId",
  protect,
  checkPermission("can_manage_hospital"),
  getDossierByPatient
);

// Ajouter un diagnostic
router.post(
  "/:patientId/diagnostic",
  protect,
  checkPermission("can_manage_hospital"),
  addDiagnostic
);

module.exports = router;
