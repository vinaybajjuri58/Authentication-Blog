const jwt = require("jsonwebtoken");
const authValidator = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      res.status(401).json({
        success: false,
        message: "User is not loggedIn",
      });
    }
    const { userId } = jwt.verify(token, process.env.KEY);
    req.userId = userId;
    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Error in validating User",
    });
  }
};
module.exports = {
  authValidator,
};
