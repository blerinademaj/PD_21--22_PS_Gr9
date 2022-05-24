const express = require("express");
const router = express.Router();


const bodyParser = require("body-parser");
var jsonParser = bodyParser.json()
const userRoutes = require("./routes");

router.use("/user",jsonParser, userRoutes);

module.exports = router;
