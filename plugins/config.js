const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  endpoint: process.env.API_URL,
  port: process.env.PORT || 8899,
  secret:
    process.env.NODE_ENV === "production" ? process.env.API_KEY : "4480b668766262a3eb1a51945ef5cb0e7faba9032eaecebce1d8227e3403ed564b7bea6ba620b34a47492c81cb5cf252bb32",
};
