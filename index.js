const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const { initialiseDBConnection } = require("./db/db.connect");
const { userRouter } = require("./routes/user.routes");
const { authValidator } = require("./middleware/authHandler");
const PORT = process.env.PORT || 5000;
initialiseDBConnection();
app.use("/user", userRouter);
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the backend of Authentication blog",
  });
});
app.get("/private", authValidator, (req, res) => {
  res.status(200).json({
    success: true,
    message: "User logged IN",
  });
});
app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
