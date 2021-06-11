const express = require("express");
const userRouter = express.Router();
const { userLogin, userSignup } = require("../controllers/user.controllers");
userRouter.route("/login").post(userLogin);
userRouter.route("/signup").post(userSignup);

module.exports = {
  userRouter,
};
