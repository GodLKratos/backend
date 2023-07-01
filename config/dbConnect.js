const mongoose = require("mongoose");
DB_URL = "mongodb+srv://sachinsaini9669:wUQjMivIzEAyCuxi@todocluster.lhq3etn.mongodb.net/?retryWrites=true&w=majority";

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