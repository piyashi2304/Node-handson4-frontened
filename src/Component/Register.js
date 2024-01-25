import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
  
    const handleRegister=()=>{
    try{
    const response=axios.post('https://backend-handson4.onrender.com/pages/register',{email,password})
    .then((res)=>{
        console.log(res.data,"register data")

        if(res.data.msg === "This email is already exist"){
            alert(res.data.msg)
           navigate('/login')
        }
        else{
            localStorage.setItem('token',res.data.token)
        }
        console.log(response.data,'response.data')
    })
}
catch(error){
     console.error("registration failed",error)
}
  
    }
    
  return (
    <>
    <div className='form'>
      <h2>Register Page</h2>
      <br />
    <input type='text' value={email} placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} />
    <br />
    <br />
    <input type='text' value={password} placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} /> <br />
    <br/>
    <button onClick={handleRegister}>Register</button>
    </div>
    </>
  )
}

export default Register