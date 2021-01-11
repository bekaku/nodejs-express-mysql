const util = require("../utils/util");
exports.index = async (req, res) => {
  const encodeKey = await util.encodeJwt();
  const decodeKey = await util.decodeJwt(encodeKey);
  return res.json({
    message: "Test Controller",
    tokenEncode: encodeKey,
    tokenDecode: decodeKey,
  });
};
