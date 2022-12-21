const User = require("../models/User");

const verifyRole = async (req,res,next)=>{
  try {
    const id = req.id;
    const user = await User.findById(id);
    if(user.role === "ADMIN"){
      next()
    }else{
      throw new Error("Falla en los permisos")
    }
  } catch (error) {
    res.status(403).json({message:error.message})
  }
}

module.exports = verifyRole;