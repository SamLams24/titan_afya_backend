const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const { authorizeRoles } = require("../middlewares/role.middleware");
const { checkPermission } = require("../middlewares/permission.middleware");

// Test route accessible uniquement aux super_admin
router.get(
  "/with-permission",
  protect,
  checkPermission("can_view_stats"),
  (req, res) => {
    res.json({ message: "Permission can_view_stats validée !" });
  }
);

module.exports = router;
