const jwt = require('jsonwebtoken');

const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token)
    return res.status(401).json({ message: "No token, access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: "Forbidden: Not an admin" });
    }

    req.user = decoded;
    next();
  } catch (err) {
    console.error("Admin verification failed:", err);
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = verifyAdmin;
