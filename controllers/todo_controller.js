const Todo  = require("../models/todoModel");


class TodoController{

    static todopost = async (req,res)=>{
        try{
            const {userId,data} = req.body;
            const todo = new Todo({
                userId:userId,
                data:data,
            });
            await todo.save();
            res.send({
                "message":"Stored",
            })
        }
        catch(e){
            res.send({
                "message":"Something Wrong",
            });
        }
    }

}

module.exports = TodoController;