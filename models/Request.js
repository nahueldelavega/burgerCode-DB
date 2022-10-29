const { Schema, model } = require("mongoose");

const RequestSchema = new Schema({
  menu: {
    type: String,
    trim: true,
    required: true,
  },
  description:{
    type: String,
    trim: true,
    required: true
  },
  price:{
    type: Number,
    trim: true,
    required: true
  }
});

module.exports = model("Request", RequestSchema);
