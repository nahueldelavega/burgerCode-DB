const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  Menu: {
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
  description: {
    type: String,
    trim: true,
    required: true,
  },
  Price: {
    type: Number,
    trim: true,
    required: true,
  },
});

module.exports = model("Menu", Schema);
