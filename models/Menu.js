const { Schema, model } = require("mongoose");

const MenuSchema = new Schema({
  // id: {
  //   type: Number,
  //   trim: true,
  //   required: true,
  // },
  menu: {
    type: String,
    trim: true,
    required: true,
  },
  // status: {
  //   type: String,
  //   trim: true,
  //   required: true,
  // },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    trim: true,
    required: true,
  },
  // category: {
  //   type: String,
  //   trim: true,
  //   required: true,
  // },
  
});

module.exports = model("Menu", MenuSchema);
