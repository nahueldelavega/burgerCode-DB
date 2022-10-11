const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
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
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
UserSchema.methods.toJSON = function () {
  const { password, ...user } = this.toObject();
  return user;
};

module.exports = model("User", UserSchema);
