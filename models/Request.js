const { Schema, model } = require("mongoose");

const RequestSchema = new Schema({
  menu: {
    type: String,
    trim: true,
    required: true,
    uppercase: true
  },
  description: {
    type: String,
    trim: true,
    required: true
  },
  price:{
    type: Number,
    trim: true,
    required: true
  },
  specification:{
    type: String,
    trim: true,
  }
});

module.exports = model("Request", RequestSchema);
