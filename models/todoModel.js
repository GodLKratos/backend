const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    data:{
        type:String
    },
});


const todoModel = mongoose.model("todo",todoSchema);

module.exports = todoModel;