import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
  const handleClick=()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <>
    <h2>Home page</h2>
    <br />
    <button onClick={handleClick}>Logout</button>
    </>
  )
}

export default Home