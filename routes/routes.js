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

router.post("/", addUser);
router.post("/login", login);
router.get("/auth", verifyAuth, auth);
router.get("/allusers", verifyAuth, getUsers);
router.post("/addRequest", addRequest);
router.get("/getRequest", getRequest);
router.delete("/deleteRequest/:_id", deleteRequest);
router.get("/getMenus", getMenus);
router.post("/addMenu", addMenu);
router.get("/getOneMenu/:_id", findOneMenu);

module.exports = router;
