exports.index = (req, res) => {
    return res.json({ msg: res.t('welcome', 'chanavee', 'bekaku')});
  };