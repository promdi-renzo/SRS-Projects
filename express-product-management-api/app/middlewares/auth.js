const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];

  const isVerified = jwt.verify(token, "jwt", function (err, decoded) {
    if (!err) {
      return decoded;
    }
  });

  if (!isVerified) {
    return res.send({ msg: "wrong bitch" });
  }
  next();
};

module.exports = { authenticate };
