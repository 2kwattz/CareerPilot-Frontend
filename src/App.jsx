import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";

// Pages Import

import Home from './pages/Home/Home';
import Login from './pages/Login/login';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
