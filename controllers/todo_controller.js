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

    static getData = async (req,res)=>{
        try{
            const{userId} = req.body;

            const data = await Todo.find({userId:userId});
            res.json({success:data});
        }
        catch(e){
            res.send({
                "message":"SOmething went wrong"
            });
        }
    }

    static deleteData = async (req,res)=>{
        try{
            const{_id} = req.body;
            const result = await Todo.findByIdAndDelete({_id:_id});
            res.send("Deleted");
        }
        catch(e){
            res.send("Something wrong");
        }
    }

}

module.exports = TodoController;