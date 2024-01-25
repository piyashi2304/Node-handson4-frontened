import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
  
    const handleRegister=()=>{
    try{
    const response=axios.post('https://backend-handson4.onrender.com/pages/login',{email,password})
    .then((res)=>{
        console.log(res.data,"register data")

        if(res.data.msg === "user is not registered"){
            alert(res.data.msg)
           navigate('/register')
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
      <h2>Login Page</h2>
      <br/>
    <input type='text' value={email} placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} />
    <br />
    <br/>
    <input type='text' value={password} placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} /> <br />
    <br />
    <button onClick={handleRegister}>login</button>
    </div>
    </>
  )
}


export default Login