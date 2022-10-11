const { Router } = require("express");
const { addUser, login, auth, getUsers } = require("../controllers/users");
const { postRequest } = require("../controllers/request");
const { addMenu } = require("../controllers/menu");
// const verifyAuth = require("../middlewares/verifyAuth");
const router = Router();

router.post("/addUser", addUser);
router.post("/login", login);
router.get("/auth", auth);
router.get("/allusers", auth, getUsers);
router.post("/postRequest", auth, postRequest);
router.post("/postMenu",auth, addMenu)

module.exports = router;
