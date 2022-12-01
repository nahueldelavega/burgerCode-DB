const { Router } = require("express");
const { addUser, login, auth, getUsers } = require("../controllers/users");
const {
  getRequest,
  addRequest,
  deleteRequest,
} = require("../controllers/requests");
const { getMenus, addMenu, findOneMenu } = require("../controllers/menu");
const verifyAuth = require("../middlewares/verifyAuth");
const router = Router();

router.post("/adduser", addUser);
router.post("/login", login);
router.get("/auth", verifyAuth, auth);
router.get("/allusers", verifyAuth, getUsers);
router.post("/addrequest", addRequest);
router.get("/getrequest", getRequest);
router.delete("/deleterequest/:_id", deleteRequest);
router.get("/getmenus", getMenus);
router.post("/addmenu", addMenu);
router.get("/getonemenu/:_id", findOneMenu);

module.exports = router;
