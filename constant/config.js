const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  endpoint: process.env.API_URL,
  port: process.env.PORT || 8899,
  secret: process.env.API_KEY || "secret",
};
