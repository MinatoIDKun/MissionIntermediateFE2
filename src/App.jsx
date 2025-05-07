import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login.jsx'
import Register from './components/pages/Register.jsx'
import Home from './components/pages/Home.jsx'
import Admin from './components/pages/Admin.jsx'

function App() {
  

 return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
