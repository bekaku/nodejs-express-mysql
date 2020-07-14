const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { port } = require("./plugins/config");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bekaku nodejs application." });
});

// set port, listen for requests
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
