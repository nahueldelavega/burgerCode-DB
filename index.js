const express = require("express");
const app = express();
const port = 4000

const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const users = require("./routes/users");
const connectDB = require("./db/connectDB");
connectDB();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Get working!')
})

app.use("/users", users);

app.listen(port, () => {
  console.log(`Back in port ${port} working!`)
})
