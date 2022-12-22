const { Schema, model } = require("mongoose");

const RequestSchema = new Schema({
  menu: {
    type: String,
    trim: true,
    required: true,
    uppercase: true
  },
  price:{
    type: Number,
    trim: true,
    required: true
  },
  specification:{
    type: String,
    trim: true,
  },
  name:{
    type: String,
    trim: true,
  },
  address:{
    type: String,
    trim: true,
  },
  phone:{
    type: Number,
    trim: true,
  }
});

module.exports = model("Request", RequestSchema);
