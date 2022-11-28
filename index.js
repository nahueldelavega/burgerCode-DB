const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const morgan = require("express");
const routes = require("./routes/routes");
const connectDB = require("./db/connectDB");
connectDB();
app.use(morgan());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes)

app.get('/', (req,res) => {
  res.json({
    message: "Backend Burguercode FOUND"
  })
})

app.listen(4000, () => console.log("Servidor funcionando en 4000"));
