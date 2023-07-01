const express = require("express");
const app = express();
const router = require("./routes/user_routes");
const dotenv = require("dotenv").config();
const connectDB = require("./config/dbConnect");
const bodyparser = require("body-parser");


const PORT = process.env.PORT;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/",router)

connectDB(process.env.DB_URL).then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})