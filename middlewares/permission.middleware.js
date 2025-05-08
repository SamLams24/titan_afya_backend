exports.checkPermission = (permissionName) => {
  return (req, res, next) => {
    if (!req.user.role) {
      return res
        .status(403)
        .json({ message: "Aucun rôle assigné à cet utilisateur." });
    }
    const permissions = req.user.role.permissions.map((p) => p.name);

    if (!permissions.includes(permissionName)) {
      return res.status(403).json({
        message: `Permission "${permissionName}" refusée`
      });
    }

    next();
  };
};
