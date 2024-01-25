import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Dashboard from './Dashboard'


function RouteCompo() {
  return (
   <>
     <BrowserRouter>
     <div className='link'>
     <Link to='/home'>Home</Link>
    
     <Link to='/register'>Register</Link>
    
     <Link to='/login'>Login</Link>

     <Link to='/dashboard'>Dashboard</Link>
     </div>


     <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
     </Routes>
     </BrowserRouter>
   </>
  )
}

export default RouteCompo