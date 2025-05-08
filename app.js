const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRoutes = require("./routes/auth.routes");
const testRoutes = require("./routes/test.routes");
const dossierRoutes = require("./routes/dossierMedical.routes");
const plainteRoutes = require("./routes/plainte.routes");
const pharmacieRoutes = require("./routes/pharmacie.routes");
const hopitalRoutes = require("./routes/hopital.routes");
const donSangRoutes = require("./routes/donSang.routes");
const hygieneRoutes = require("./routes/hygiene.routes");
const assuranceRoutes = require("./routes/assurance.routes");
const croixRougeRoutes = require("./routes/croixRouge.routes");
const adminRoutes = require("./routes/admin.routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/dossier-medical", dossierRoutes);
app.use("/api/plaintes", plainteRoutes);
app.use("/api/pharmacie", pharmacieRoutes);
app.use("/api/hopital", hopitalRoutes);
app.use("/api/don-sang", donSangRoutes);
app.use("/api/hygiene", hygieneRoutes);
app.use("/api/assurance", assuranceRoutes);
app.use("/api/croix-rouge", croixRougeRoutes);
app.use("/api/admin", adminRoutes);

module.exports = app;
