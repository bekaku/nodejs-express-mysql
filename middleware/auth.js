const jwt = require("express-jwt");
const { secret } = require("../constant/config");
const util = require("../utils/util");
// const getTokenFromHeader = (req) => {
//   if (
//     (req.headers.authorization &&
//       req.headers.authorization.split(" ")[0] === "Token") ||
//     (req.headers.authorization &&
//       req.headers.authorization.split(" ")[0] === "Bearer")
//   ) {
//     return req.headers.authorization.split(" ")[1];
//   }
//   return null;
// };

const auth = {
  required: jwt({
    secret: secret,
    algorithms: ["HS256"],
    userProperty: "payload",
    getToken: util.getTokenFromHeader,
  }),
  optional: jwt({
    secret: secret,
    algorithms: ["HS256"],
    userProperty: "payload",
    credentialsRequired: false,
    getToken: util.getTokenFromHeader,
  }),
};

module.exports = auth;
