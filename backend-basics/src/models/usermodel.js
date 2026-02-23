const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
        min:1   
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true
    }
},{
    timestamps:true
})

module.exports=mongoose.model("User",userSchema)
