const express = require('express');
const router = express.Router();
const UserController = require("../controllers/user_controllers")


router.post("/reg",UserController.registration);
router.post("/login",UserController.login);
router.get("/",(req,res)=>{
    res.send("Hello from sachin saini");
})


module.exports = router;