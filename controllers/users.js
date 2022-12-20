const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CustomError = require("../helpers/CustomError");
const User = require("../models/User");

const addUser = async (req, res) => {
  try {
    const { password, ...user } = req.body;
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    user.password = encryptedPassword;
    const newUser = new User(user);
    await newUser.save();
    res.status(201).json({ message: "Usuario creado", user });
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const match = bcrypt.compare(password, user.password);
    const token = jwt.sign(
      { email, id: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );
    if(match){
      res.json({
        message: "Usuario logueado exitosamente",
        token: token
      }) 
    } else {
      res.json({
        message:"usuario o contraseña incorrecta"
      })}
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

const auth = async (req, res) => {
  try {
    const id = req.id;
    const user = await User.findById(id);
    if (!user) throw new CustomError("Usuario no encontrado");
    res.status(200).json({ user });
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json({ user });
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

const editUser = async (req, res) => {
  const { _id, password, name, lastName, address, phone } = req.body;
  try {
    const userFound = await User.findByIdAndUpdate(_id, {
      password,
      name,
      lastName,
      address,
      phone,
    });
    res.json({
      message: `Usuario ${userFound.user} modificado correctamente`,
    });
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (req, res) => {
  const { _id } = req.params;

  const user = await User.findById(_id);

  try {
    await User.findByIdAndDelete(user);
    res.json({
      message: `Usuario ${user.name} eliminado correctamente`,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  addUser,
  login,
  auth,
  getUsers,
  getUser,
  editUser,
  deleteUser,
};
