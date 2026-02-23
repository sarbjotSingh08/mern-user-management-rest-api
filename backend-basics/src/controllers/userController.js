const User=require("../models/usermodel");
const userSchema=require("../schemas/userSchema")

exports.createUser=async (req,res)=>{
  console.log(req.body)

    try{
        const result=userSchema.safeParse(req.body);
         // ❌ Zod validation failed
   if (!result.success) {
  return res.status(400).json({
    status: "fail",
    field: result.error.issues[0].path[0],
    message: result.error.issues[0].message
  });
}

    // why here result.data because when we parse data it create wrapping inside data []
  const user=await User.create(result.data);
   res.status(201).json(
    {
        status:"success",
        data:user
    }
   )
    }
    //always send field if error for specific attribute or field 
    catch(error){
        // console.log(typeof req.body.age)

    //   / Mongo duplicate key error
    if (error.code === 11000) {
      return res.status(409).json({
        status: "fail",
        field:"email",
        message: "Email already exists"
      });
    }

    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Server error"
    });
    }
}







exports.getAllUsers=async (req,res)=>{
  try{
 const users=await User.find({});
  return res.status(200).json({
    status:"success",
    data:users
  })
  }
  catch(err){
    return res.status(500).json({
      status:"fail",
      message:"server error"
    })
  }
 
}




exports.getUserById=async (req,res)=>{
  try{

  const user=await User.findById(req.params.id);
  if(!user){
    return res.status(404).json({
status:"fail",
message:"user not found"
    })
  }
  return res.status(200).json({
    status:"success",
    data:user
  })
}
catch(err){
    return res.status(500).json({
      status: "fail",
      message: "Server error"
    });

}

}





exports.updateUser=async (req,res)=>{
  try{

  // ZOD VALIDATIONS
  const result=userSchema.safeParse(req.body)

     if (!result.success) {
      return res.status(400).json({
        status: "fail",
        field: result.error.issues[0].path[0],
        message: result.error.issues[0].message
      });
    }
  const user=await User.findByIdAndUpdate(req.params.id,result.data,
    { returnDocument: "after",runValidators:true}
  )
  if(!user){
    return res.status(404).json({
      status:"fail",  
      message:"user not found"
    })
  }
  return res.status(200).json({
    status:"success",
    data:user,
    message:"user found"
  })
}
catch(error){

  if(error.code === 11000){
  return res.status(409).json({
    status:"fail",
    field:"email",
    message:"email already exists"
  })
  }
  return res.status(500).json({
    status:"fail",
    message:"internal server error"
  })
  
  
  
}
}


exports.deleteUser=async (req,res)=>{
  try{  
  const deletedUser=await User.findByIdAndDelete(req.params.id);
  if(!deletedUser){
    return res.status(404).json({
      status:"fail",
      message:"user not found"
    })
  }
  return res.status(200).json({
    status:"success",
    message:"user deleted successfuly"
  })
}
catch(err){
  return res.status(500).json({
    status:"fail",
    message:"internal server error"
  })
}
}


