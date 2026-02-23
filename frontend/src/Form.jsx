  import React from 'react'
  import { useState } from 'react'
  import axios from "axios";

  export default function Form(){
    
  const [FormData,SetFormData]=useState({
      name:"",
      age:"",
      email:""
  })
  const [errors,SetError]=useState({
    name:"",
    age:"",
    email:""
  });
  const [success, SetSuccess] = useState("");
  const handleChange=(e)=>{
      let {name,value}=e.target;
    
      SetFormData((prev)=>{
            if(name==="age"){
          return {...prev,[name]:Number(value)}
      }
      else{
  return {
      ...prev,[name]:value
  }
  }      
      })
  }
  const handleSubmit=async (e)=>{
      e.preventDefault();
          // ✅ Clear old errors first
      SetError({
        name:"",
        age:"",
        email:""
      });
//for showing error of all speciuc field
      let hasError=false;
      if(!FormData.name.trim()){
      SetError((prev)=>({
      ...prev,name:"name is required"
      }))
        hasError=true;
    }
    if(FormData.age===""||FormData.age===null){
      SetError((prev)=>({
        ...prev,age:"age is required"
      }))
        hasError=true;
    }
    else if(FormData.age<13){
      SetError((prev)=>({
        ...prev,age:"minimum age should be 18"
      }))
        hasError=true;
    }
    if(!FormData.email.trim()){
      SetError((prev)=>({
        ...prev,email:"email is required"
      }))
        hasError=true;
    }
      else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(FormData.email.trim())){
        SetError((prev)=>({
        ...prev,email:"Invalid email format"
      }))
      hasError=true;
      }
    if(hasError) return;
  try{
    await axios.post("http://localhost:3002/api/users", FormData);
      SetSuccess("user created successfuly")
      SetFormData({
          name: "",
          age: "",
          email: ""
        });
  }

  catch (err) {
    
    // console.log(err);
    //we require field from err response data field and message and set [field]:message
    //for error comes from backend by getting their field set message is it is error of name,age,email
    const field=err.response?.data?.field;
    const message=err.response?.data?.message||"server error";
  if(field){
      SetError((prev)=>({
          ...prev,
          [field]:message         
        }))
      }
    // SetError(err.response?.data?.message || "Server error. Please try again.")
    SetSuccess("");
  }


  }
      return (
          <>
          <p>USER MANAGEMENT SYSTEM</p>
          <form onSubmit={handleSubmit}>
          <label>Username:</label><br/>
          <input type="text"  name="name" value={FormData.name} onChange={handleChange} />
          
          {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
  <label>age:</label><br/>
          <input type="number"  name="age" value={FormData.age} onChange={handleChange}/>
          {errors.age&& <p style={{color:"red"}}>{errors.age}</p>}

          <label>Email:</label><br/>
          <input type="email"  name="email" value={FormData.email} onChange={handleChange}/>
          {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
          
        {success && <p style={{ color: "green" }}>{success}</p>}
          <button>Submit</button>
          </form>
          </>
      )
  }

// import React from "react";
// import { useFormik } from "formik";
// import axios from "axios";

// export default function Form() {

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       age: "",
//       email: ""
//     },

//     validate: (values) => {
//       const errors = {};

//       if (!values.name) {
//         errors.name = "Name is required";
//       }

//       if (!values.age) {
//         errors.age = "Age is required";
//       } else if (values.age < 18) {
//         errors.age = "Minimum age is 18";
//       }

//       if (!values.email) {
//         errors.email = "Email is required";
//       } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
//         errors.email = "Invalid email format";
//       }

//       return errors;
//     },

//     onSubmit: async (values, { resetForm }) => {
//       try {
//         await axios.post("http://localhost:3002/api/users", values);
//         alert("User created successfully");
//         resetForm();
//       } catch (err) {
//         alert(err.response?.data?.message || "Server error");
//       }
//     }
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>

//       <label>Username:</label><br />
//       <input
//         type="text"
//         name="name"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.name}
//       />
//       {formik.touched.name && formik.errors.name && (
//         <p style={{ color: "red" }}>{formik.errors.name}</p>
//       )}

//       <br />

//       <label>Age:</label><br />
//       <input
//         type="number"
//         name="age"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.age}
//       />
//       {formik.touched.age && formik.errors.age && (
//         <p style={{ color: "red" }}>{formik.errors.age}</p>
//       )}

//       <br />

//       <label>Email:</label><br />
//       <input
//         type="email"
//         name="email"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.email}
//       />
//       {formik.touched.email && formik.errors.email && (
//         <p style={{ color: "red" }}>{formik.errors.email}</p>
//       )}

//       <br /><br />

//       <button type="submit">Submit</button>
//     </form>
//   );
// }
