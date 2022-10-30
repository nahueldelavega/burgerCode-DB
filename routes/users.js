const { Router } = require("express");
const { addUser, login, auth, getUsers } = require("../controllers/users");
const { getRequest, addRequest, deleteRequest } = require("../controllers/requests");
const verifyAuth = require("../middlewares/verifyAuth");
const router = Router();

router.post("/", addUser);
router.post("/login", login);
router.get("/auth", verifyAuth, auth);
router.get("/allusers", verifyAuth, getUsers);
router.post("/addRequest", addRequest)
router.get("/getRequest", getRequest)
router.delete("/deleteRequest/:_id", deleteRequest)

module.exports = router;
