const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const auth = (req, res, next) => {
  const authHeaders = req.headers.authorization;
  if (!authHeaders || !authHeaders.startsWith("Bearer ")) {
    throw new UnauthenticatedError("No auth headers found in the request");
  }

  const token = authHeaders.split(" ")[1];
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const { userId, name } = decode;
    req.user = { userId, name };
    next();
  } catch (err) {
    throw new UnauthenticatedError("Invalid user credentials.. password");
  }
};

module.exports = auth;
