const i18n = require("i18n");

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
module.exports = i18n;
