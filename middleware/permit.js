module.exports = permit = (permissionName) => {
  // const isAllowed = role => allowed.indexOf(role) > -1;
  const isAllowed = true;
  return (req, res, next) => {
    console.log(
      `Middleware > permission : ${permissionName}, baseUrl : ${req.baseUrl}`
    );
    if (isAllowed) {
      next(); // role is allowed, so continue on the next middleware
    } else {
      res.status(403).json({ message: "Forbidden" }); // user is forbidden
    }
  };
};
