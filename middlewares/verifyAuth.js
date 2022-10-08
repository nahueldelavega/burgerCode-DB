const jwt = require('jsonwebtoken');

const verifyAuth = (req,res,next)=>{
  try {
    const token = req.header('authorization');
    if(!token) throw new Error('Credenciales inválidas');
    const payload = jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.id = payload.id;
    req.email = payload.email;
    next();
  } catch (error) {
    res.status(403).json({message:error.message})
  }
}

module.exports = verifyAuth