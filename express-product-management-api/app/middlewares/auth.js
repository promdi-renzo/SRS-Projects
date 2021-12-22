import jwt from "jsonwebtoken";
import ENV from "../environment/environment.js";

const authenticate = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];

  const isVerified = jwt.verify(token, ENV.jwt_key, function (err, decoded) {
    if (!err) {
      return decoded;
    }
  });

  if (!isVerified) {
    return res.send({ msg: "wrong bitch" });
  }
  next();
};

export default { authenticate };
