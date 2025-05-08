const mongoose = require("mongoose");

const plainteSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    partenaire_vise: {
      type: String,
      required: true
    },
    message_plainte: {
      type: String,
      required: true
    },
    statut: {
      type: String,
      enum: ["En attente", "En cours", "Résolu"],
      default: "En attente"
    },
    notes_admin: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Plainte", plainteSchema);
