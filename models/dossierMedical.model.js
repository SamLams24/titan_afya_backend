const mongoose = require("mongoose");

const dossierMedicalSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true // un seul dossier par patient
    },
    antecedents_medicaux: { type: String },
    ordonnances: [
      {
        medicament: String,
        posologie: String,
        etat: {
          type: String,
          enum: ["acheté", "non acheté"],
          default: "non acheté"
        },
        date: { type: Date, default: Date.now }
      }
    ],
    analyses: [
      {
        type_analyse: String,
        resultat: String,
        date: { type: Date, default: Date.now }
      }
    ],
    diagnostics: [
      {
        diagnostic: String,
        date: { type: Date, default: Date.now }
      }
    ],
    traitements: [
      {
        traitement: String,
        date_debut: Date,
        date_fin: Date
      }
    ],
    vaccins: [
      {
        vaccin: String,
        date: { type: Date, default: Date.now }
      }
    ],
    documents_medicaux: [String],
    dons_sang: [
      {
        quantite: Number,
        date: { type: Date, default: Date.now },
        resultat_analyse: String
      }
    ],
    assurance: {
      prime: String,
      couverture: String,
      date: { type: Date }
    },
    croix_rouge: {
      numero_badge: String,
      groupe_sanguin: String,
      date: { type: Date }
    }
  },

  { timestamps: true }
);

module.exports = mongoose.model("DossierMedical", dossierMedicalSchema);
