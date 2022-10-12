const { Router } = require("express");
const { addUser, login, auth, getUsers } = require("../controllers/users");
const verifyAuth = require("../middlewares/verifyAuth");
const router = Router();

router.post("/", addUser);
router.post("/login", login);
router.get("/auth", verifyAuth, auth);
router.get("/allusers", verifyAuth, getUsers);

module.exports = router;
