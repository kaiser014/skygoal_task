import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import HeaderNavbar from '../component/Header-Navbar/HeaderNavbar';
const PageRouting = () => {
  return (
    <div>
        <HeaderNavbar />
        <Routes>
            <Route path='/' element={<Home />}/>
        </Routes>
    </div>
  )
}

export default PageRouting;