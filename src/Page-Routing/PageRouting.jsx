import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import HeaderNavbar from '../component/Header-Navbar/HeaderNavbar';
import FooterSection from '../component/Footer_Section/FooterSection';
const PageRouting = () => {
  return (
    <div>
        <HeaderNavbar />
        <Routes>
            <Route path='/' element={<Home />}/>
        </Routes>
        <FooterSection />
    </div>
  )
}

export default PageRouting;