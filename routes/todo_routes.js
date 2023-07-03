const express = require('express');
const router = express.Router();
const TodoController = require("../controllers/todo_controller");




router.post("/data",TodoController.todopost);
router.post("/getdata",TodoController.getData)


module.exports = router;