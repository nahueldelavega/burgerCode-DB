const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const CustomError = require("../helpers/CustomError");
const User = require("../models/Menu");

const addMenu = async (req, res) => {
  try {
    const { id, ...menu } = req.body;
    const salt = await bcrypt.genSalt(10);
    const encryptedId = await bcrypt.hash(id, salt);
    menu.id = encryptedId;
    const newMenu = new Menu(menu);
    await newMenu.save();
    res.status(201).json({ message: "Menu creado" });
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

module.exports = {
  addMenu,
};
