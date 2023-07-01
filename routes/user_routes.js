const express = require('express');
const router = express.Router();
const UserController = require("../controllers/user_controllers")


router.post("/reg",UserController.registration);
router.post("/login",UserController.login);



module.exports = router;