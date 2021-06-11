const mongoose = require("mongoose");
const initialiseDBConnection = async () => {
  const dbUrl = process.env.DB_URL;
  try {
    await mongoose.connect(dbUrl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DB connected successfully");
  } catch (err) {
    console.log("error in establishing DB connection");
  }
};
module.exports = {
  initialiseDBConnection,
};
