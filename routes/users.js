const {Router} = require('express');
const { addUser, login } = require('../controllers/users');
const router = Router();

router.post('/',addUser);
router.post('/login',login);

module.exports=router;