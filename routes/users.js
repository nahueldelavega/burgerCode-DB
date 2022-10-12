const { Router } = require("express");
const { addUser, login, auth, getUsers } = require("../controllers/users");
const verifyAuth = require("../middlewares/verifyAuth");
const router = Router();
const { postRequest, getRequests } = require('../controllers/request')

router.post("/", addUser);
router.post("/login", login);
router.get("/auth", verifyAuth, auth);
router.get("/allusers",verifyAuth, getUsers);
router.post("/postrequest", postRequest);
router.get("/getrequests", getRequests);

module.exports = router;
