const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userData = await User.findOne({ email: email });
    if (!userData) {
      return res.status(500).json({
        success: false,
        message: "Email doesnt exists",
      });
    }
    const isValidPassword = await bcrypt.compare(password, userData.password);
    if (!isValidPassword) {
      return res.status(500).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
    const token = jwt.sign({ userId: userData.id }, process.env.KEY, {
      expiresIn: "24h",
    });
    res.status(200).json({
      success: true,
      userToken: token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error in Login process",
    });
  }
};
const userSignup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      res.status(500).json({
        success: false,
        message: "Email is already registered",
      });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ email, name, password: hashPassword });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in signup",
    });
  }
};

module.exports = {
  userLogin,
  userSignup,
};
