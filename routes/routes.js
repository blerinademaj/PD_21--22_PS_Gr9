const express = require("express");
const router = express.Router();


const checkAuth = require("../check-auth");


const {registerUserApp,loginUserApp,addMssagesUser,getMessagesUser
} = require("../user-controller");






router.post("/register",registerUserApp)
router.post("/login",loginUserApp)
router.use(checkAuth);

router.post("/addmessages",addMssagesUser)
router.get("/messages", getMessagesUser)

module.exports = router;
