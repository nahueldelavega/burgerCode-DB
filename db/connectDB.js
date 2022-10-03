const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("DB CONECTADA");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
