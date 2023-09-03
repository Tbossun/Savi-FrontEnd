import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from '../Pages/LandingPage/LandingPage';
import LoginPage from '../Components/Pages/Auth/Loginpage';
import Signup from '../Components/Pages/Auth/Signup';
import ResetPassword from '../Components/Pages/Auth/ResetPassword';

export default function SaviRoutes() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/passwordreset" element={<ResetPassword />} />
      </Routes>
    </Router>
  )
}
