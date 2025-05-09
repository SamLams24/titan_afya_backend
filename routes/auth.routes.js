/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Inscription d'un utilisateur
 *     tags: [Authentification]
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
 *         description: Compte créé avec succès
 *       400:
 *         description: Erreur de validation
 *
 * /api/auth/login:
 *   post:
 *     summary: Authentifier un utilisateur
 *     tags: [Authentification]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Connexion réussie
 *
 */

const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth.controller");
const { protect } = require("../middlewares/auth.middleware");

router.post("/signup", register);
router.post("/login", login);
router.get("/me", protect, (req, res) => {
  res.json(req.user);
});

module.exports = router;
