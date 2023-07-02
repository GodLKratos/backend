const express = require("express");
const app = express();
const router = require("./routes/user_routes");
const dotenv = require("dotenv").config();
const connectDB = require("./config/dbConnect");
const bodyparser = require("body-parser");
const cors = require("cors");


const PORT = process.env.PORT;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use("/",router)
connectDB(process.env.DB_URL);

app.listen(PORT,()=>{
    console.log('Server is running on port 3000');
})