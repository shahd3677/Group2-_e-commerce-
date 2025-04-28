const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const getToken = req.headers.token;
  if (getToken) {
    try {
      const decode = jwt.verify(getToken, process.env.SECRETKEY);
      req.staff = decode;
      next();
    } catch (error) {
      return res.status(401).json({
        message: "your session is expired, please login again",
      });
    }
  } else {
    return res.status(401).json({ message: "you are not authorized" });
  }
};
const verifyAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.params.id === req.staff.id || req.staff.role === "admin") {
      next();
    } else {
      return res.status(401).json({ message: "you are not authorized" });
    }
  });
};
const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.staff.role === "admin") {
      next();
    } else {
      return res.status(401).json({ message: "you are not authorized" });
    }
  });
};

module.exports = {
  verifyAdmin,
  verifyAuthorization,
};
