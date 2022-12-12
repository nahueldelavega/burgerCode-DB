const { Router } = require("express");
const {
  addUser,
  login,
  auth,
  getUsers,
  getUser,
  editUser,
  deleteUser,
} = require("../controllers/users");
const {
  getRequest,
  addRequest,
  deleteRequest,
} = require("../controllers/requests");
const {
  addMenu,
  getMenus,
  editMenu,
  deleteMenu,
  findOneMenu,
} = require("../controllers/menu");
const verifyAuth = require("../middlewares/verifyAuth");
const router = Router();

router.post("/adduser", addUser);
router.post("/login", login);
router.get("/auth", verifyAuth, auth);
router.get("/allusers", getUsers);
router.get("/getUser/:id", getUser);
router.put("/editUser", editUser);
router.delete("/deleteUser/:_id", deleteUser);
router.post("/addrequest", addRequest);
router.get("/getrequest", getRequest);
router.delete("/deleterequest/:_id", deleteRequest);
router.get("/getmenus", getMenus);
router.post("/addmenu", addMenu);
router.get("/getonemenu/:_id", findOneMenu);
router.put("/editmenu", editMenu);
router.delete("/deletemenu/:_id", deleteMenu);

module.exports = router;
