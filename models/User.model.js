const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const opts = { toJSON: { virtuals: true } };
const userSchema = Schema(
  {
    name: {
      type: String,
      required: "Add a name",
    },
    email: {
      type: String,
      required: "Add an email",
    },
    password: {
      type: String,
      required: "Add password",
    },
  },
  opts
);
module.exports = model("User", userSchema);
