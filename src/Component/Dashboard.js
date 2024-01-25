import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate=useNavigate()
    const [message,setMessage]=useState('')

    useEffect(()=>{
        const token=localStorage.getItem('token')
        console.log("token",token)

        if(!token){
            navigate('/login')
        }
        else{
            axios.get("https://backend-handson4.onrender.com/pages/dashboard",
            {headers:{
                authorization:`Bearer ${token}`,
        }}
        )
        .then(res=>{
          const responsedata=res.data
          alert (responsedata.msg)
          setMessage(responsedata.msg)
            
        })
        }
     

    },[navigate])
  return (
    <>
    <h2>Dashboard page</h2>
    <p>{message}</p>
    </>
  )
}

export default Dashboard