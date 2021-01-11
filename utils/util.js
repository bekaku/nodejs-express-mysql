const jwt = require("jsonwebtoken");
const { secret } = require("../constant/config");
exports.getTokenFromHeader = (req) => {
  let key = null;
  if (
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Token") ||
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer")
  ) {
    key = req.headers.authorization.split(" ")[1];
  }
  return key;
};

exports.encodeJwt = () => {
  return new Promise((resolve) => {
    const token = jwt.sign(
      {
        uid: 1,
        key: "asdfghjkk",
        locale: "th",
      },
      secret,
      { algorithm: "HS256", expiresIn: "365d" }
    ); //expiresIn: 60 * 60
    resolve(token);
  });
};
exports.decodeJwt = (token) => {
  return new Promise((resolve) => {
    const decoded = jwt.verify(token, secret);
    resolve(decoded);
  });
};
