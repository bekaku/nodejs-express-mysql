exports.index = (req, res) => {
  return res.json({
    message: res.t("welcome", "chanavee", "bekaku"),
    dir: __dirname,
  });
};
