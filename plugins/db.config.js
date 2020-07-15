const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  PORT: process.env.DB_PORT,
  DB: process.env.DB_DB,
  dialect: process.env.DB_DIALECT,
  // HOST: "demo.appedr.com",
  // USER: "root",
  // PASSWORD: "@Dev@ats[]^9yl",
  // PORT: 13537,
  // DB: "node_express_mysql",
  // dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
