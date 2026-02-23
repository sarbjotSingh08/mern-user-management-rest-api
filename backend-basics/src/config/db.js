require("dotenv").config()
const mongoose=require("mongoose");
const mongoDbConnect= async ()=>
{ 
    try{
    await mongoose.connect(process.env.MONGO_CONNECT);
console.log("database connected" );
    }
    catch(err){
        console.error(err,"database connection error");
        process.exit(1);

    }
}
module.exports=mongoDbConnect;