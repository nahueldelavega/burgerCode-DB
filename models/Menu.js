const { Schema, model } = require("mongoose");

const MenuSchema = new Schema({
  menu: {
    type: String,
    trim: true,
    required: true,
    uppercase: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    trim: true,
    required: true,
  }
});

module.exports = model("Menu", MenuSchema);
