const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://BurguerCodeBE:BurguerCodeBE@burgercodebe.yrljjl4.mongodb.net/?retryWrites=true&w=majority');
    console.log("DB CONNECTED");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
