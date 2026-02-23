require("dotenv").config();

const express=require("express");
const app=express();
const cors=require("cors");
const db=require("./src/config/db");
const userRoute=require("./src/routes/userroute");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//connect database
db();
app.use("/api/users",userRoute)
//test route

module.exports=app