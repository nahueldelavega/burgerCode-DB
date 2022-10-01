const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    role: {
      type: "String",
      required: true,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("User", UserSchema);
