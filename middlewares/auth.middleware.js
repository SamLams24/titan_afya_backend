const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
require("../models/permission.model");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Non autorisé, token manquant" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Populate du rôle et des permissions
    req.user = await User.findById(decoded.id)
      .select("-password")
      .populate({
        path: "role",
        populate: {
          path: "permissions"
        }
      });

    if (!req.user) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }

    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Token invalide", error: error.message });
  }
};
