import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Integration from '../Pages/Integration';
import Pricing from '../Pages/Pricing';
import Demo from '../Pages/Demo';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';


const AllRoutes = () => {
  return (
    
    <Routes>
        <Route path="/home" element={<Home />} />
       <Route path="/products" element={<Products />} />
       <Route path="/integration" element={<Integration />} />
       <Route path="/pricing" element={<Pricing />} />
       <Route path="/demo" element={<Demo />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
    </Routes>
    
  )
}

export default AllRoutes
