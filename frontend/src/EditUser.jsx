
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: ""
  });
const [error,SetError]=useState({
  name:"",
  age:"",
  email:""
})
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `http://localhost:3002/api/users/${id}`
      );
      setFormData(res.data.data);
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    //set errror 
    SetError({
      name:"",
      age:"",
      email:""
    })
    let hasError=false
      if(!formData.name.trim()){
SetError((prev)=>{
  return {...prev,name:"name is required"}
  
})
  hasError=true;

  }
  else if(!formData.name.trim().match(/^[A-Za-z ]+$/)){
     SetError((prev)=>{
      return {...prev,name:"name must contain only letters"}
    })
  hasError=true;

  }
 if(formData.age<1 || !formData.age){
    SetError((prev)=>{
      return {...prev,age:"age must be positive"}
    })
  hasError=true;

  }
  if(!formData.email.trim()){
    SetError((prev)=>{
      return {
        ...prev,email:"email is required"
      }
    })
  hasError=true;

  }
  else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())){
     SetError((prev)=>{
      return {...prev,email:"email must contain @ and special characters"}
    })
  hasError=true;

  }
  if(hasError){
    return;
  }
  try{
    await axios.put(
      `http://localhost:3002/api/users/${id}`,
      formData
    );

    navigate("/");
  }
  catch(err){
    const field=err?.response?.data?.field;
    const message=err?.response?.data?.message || "server error";
    if(field){
      SetError((prev)=>{
        return {...prev,[field]:message}
      })
    }
  }
  };

  return (
    <div>
      <h2>Edit User</h2>

      <form onSubmit={handleSubmit}>
      <label htmlFor="">Username:</label><br />
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
        />  
        {error.name && <p style={{color:"red"}}>{error.name}</p>}
      <label htmlFor="">Age:</label><br />
        <input
          name="age"
          value={formData.age}
          onChange={handleChange}
        /> 
        {error.age && <p style={{color:"red"}}>{error.age}</p>}

      <label htmlFor="">Email:</label><br/>

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {error.email && <p style={{color:"red"}}>{error.email}</p>}

        <button type="submit">Update</button>
      </form>
    </div>
  );
}
