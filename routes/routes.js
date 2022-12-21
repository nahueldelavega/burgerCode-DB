const { Router } = require("express");
const {
  addUser,
  login,
  getUsers,
  deleteUser
} = require("../controllers/users");
const {
  getRequest,
  addRequest,
  deleteRequest
} = require("../controllers/requests");
const {
  addMenu,
  getMenus,
  editMenu,
  deleteMenu
} = require("../controllers/menu");
const router = Router();

router.post("/adduser", addUser);
router.post("/login", login);
router.get("/allusers", getUsers);
router.delete("/deleteuser/:_id", deleteUser);
router.get("/getrequest", getRequest);
router.post("/addrequest", addRequest);
router.delete("/deleterequest/:_id", deleteRequest);
router.post("/addmenu", addMenu);
router.get("/getmenus", getMenus);
router.put("/editmenu", editMenu);
router.delete("/deletemenu/:_id", deleteMenu);

module.exports = router;
