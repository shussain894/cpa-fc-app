import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'

function App() {
  return (
    <Routes>
      <Route path='/signup' element={<SignUp navigate={ useNavigate() }/>}/> 
      <Route path='/login' element={<Login navigate={ useNavigate() }/>}/> 
      <Route path='/home' element={<Home navigate={ useNavigate() }/>}/> 
      <Route path='/register' element={<Register navigate={ useNavigate() }/>}/> 
    </Routes>
  );
}

export default App;
