const express = require('express');
const router = express.Router();
const UserController = require("../controllers/user_controllers")

router.get("/",(req,res)=>{
    res.send("Hello from sachin saini");
});
router.get("/xyz",(req,res)=>{
    res.send("hello ji");
});
router.post("/reg",UserController.registration);
router.post("/login",UserController.login);



module.exports = router;