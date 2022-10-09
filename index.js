const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const users = require("./routes/users");
const connectDB = require("./db/connectDB");
connectDB();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/users", users);

app.listen(4000, () => console.log("Servidor funcionando en 4000"));
