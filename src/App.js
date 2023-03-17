import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      <Route path='/signup' element={<SignUp navigate={ useNavigate() }/>}/> 
      <Route path='/login' element={<Login navigate={ useNavigate() }/>}/> 
    </Routes>
  );
}

export default App;
