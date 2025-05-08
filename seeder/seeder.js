require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const Permission = require("../models/permission.model");
const Role = require("../models/role.model");

const url = process.env.MONGO_URI;
console.log(url);
mongoose.connect(url);

const seedPermissionsAndRoles = async () => {
  await Permission.deleteMany();
  await Role.deleteMany();

  const permissionsList = [
    { name: "can_add_patient", description: "Peut ajouter un patient" },
    { name: "can_view_stats", description: "Peut voir les statistiques" },
    { name: "can_manage_pharmacy", description: "Peut gérer la pharmacie" },
    {
      name: "can_manage_hospital",
      description: "Peut gérer les dossiers hôpital"
    },
    {
      name: "can_manage_blood_donation",
      description: "Peut gérer les dons de sang"
    },
    {
      name: "can_manage_hygiene",
      description: "Peut gérer les bilans hygiène"
    },
    { name: "can_manage_insurance", description: "Peut gérer les assurances" },
    {
      name: "can_handle_complaints",
      description: "Peut gérer les plaintes utilisateurs"
    }
  ];

  const permissions = await Permission.insertMany(permissionsList);

  const superAdminRole = await Role.create({
    name: "super_admin",
    permissions: permissions.map((p) => p._id)
  });

  const patientRole = await Role.create({
    name: "patient",
    permissions: []
  });
  const pharmacyRole = await Role.create({
    name: "pharmacy",
    permissions: []
  });
  const supportRole = await Role.create({
    name: "support",
    permissions: []
  });

  console.log("✅ Seed terminé");
  process.exit();
};

seedPermissionsAndRoles();
