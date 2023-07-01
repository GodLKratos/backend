const mongoose = require("mongoose");


const connectDB = async (DATABASE_URL)=>{
    try{
        const  DB_OPTION = {
            dbName:"todo",
        }
        await mongoose.connect( DATABASE_URL, DB_OPTION);
        console.log("DataBase Connected");
    }
    catch(e){
        console.log(e);
    }
}

module.exports = connectDB;