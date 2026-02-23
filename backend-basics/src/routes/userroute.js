const express=require("express");
const router=express.Router()
const {createUser,getAllUsers,getUserById,updateUser,deleteUser} =require("../controllers/userController")

// why while put request in thundercliengt we need to send { "name":"pathak saab", "age":23, "email":"test@gmail.com" } full as we cant send {"name":"test"} not update single name only wh
// CREATE ROUTE
router.post("/",createUser)


//READ ROUTE
router.get("/",getAllUsers)


//GET DATA BY ID ROUTE
router.get("/:id",getUserById)


//UPDATE ROUTE UODATE BY ID
router.put("/:id",updateUser)

router.delete("/:id",deleteUser)

module.exports=router