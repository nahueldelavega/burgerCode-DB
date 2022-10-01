const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const CustomError = require('../helpers/CustomError');
const User = require('../models/User');

const addUser = async(req,res)=>{
  try {
    const {password, ...user} = req.body;
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password,salt);
    user.password=encryptedPassword;
    const newUser = new User(user);
    await newUser.save()
    res.status(201).json({message:'Usuario creado'})
  } catch (error) {
    res.status(error.code || 500).json({message:error.message})
  }
}

const login = async (req,res)=>{
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) throw CustomError('Usuario no encontrado',404);
    const passwordOk = await bcrypt.compare(password, user.password);
    if(!passwordOk) throw CustomError('Credenciales inválidas',401);
    const token = jwt.sign({email, id:user._id}, process.env.JWT_SECRET_KEY,{expiresIn:'1h'});
    res.status(201).json({message:'Logueo correcto', token, user})
  } catch (error) {
    res.status(error.code || 500).json({message:error.message})
  }
}

module.exports = {
  addUser,
  login
}