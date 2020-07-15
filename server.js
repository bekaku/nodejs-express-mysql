const http = require("http"),
  path = require("path"),
  methods = require("methods"),
  express = require("express"),
  bodyParser = require("body-parser"),
  session = require("express-session"),
  cors = require("cors"),
  passport = require("passport"),
  i18n = require("i18n"),
  errorhandler = require("errorhandler");

const { port } = require("./plugins/config");

const isProduction = process.env.NODE_ENV === "production";

// Create global app object
const app = express();

app.use(cors());

// Normal express config defaults
app.use(require("morgan")("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require("method-override")());
app.use(express.static(__dirname + "/public"));
app.use(
  session({
    secret: "conduit",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
  })
);

if (!isProduction) {
  app.use(errorhandler());
}

// if (isProduction) {
//   mongoose.connect(process.env.MONGODB_URI);
// } else {
//   mongoose.connect("mongodb://localhost/conduit");
//   mongoose.set("debug", true);
// }

//i18n locales
i18n.configure({
  locales: ["th", "en"],
  directory: __dirname + "/locales",
  defaultLocale: "th",
  directoryPermissions: "755",
  api: {
    __: "t", //now req.__ becomes req.t
    __n: "tn", //and req.__n can be called as req.tn
  },
});
// default: using 'accept-language' header to guess language settings
app.use(i18n.init);

//This creates the table if it doesn't exist (and does nothing if it already exists)
// const db = require("./models");
// db.sequelize.sync();

app.use(require("./routes"));

/// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function (err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

// finally, let's start our server...
const server = app.listen(port, () => {
  // console.log("Listening on port " + server.address().port);
  console.log(`Server is running on http://localhost:${port}/api/`);
});
