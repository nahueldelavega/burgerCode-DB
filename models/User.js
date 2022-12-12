const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
      uppercase: true,
    },
    address: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: Number,
      trim: true,
      required: true,
    },

    role: {
      type: "String",
      required: true,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  }
);

module.exports = model("User", UserSchema);
