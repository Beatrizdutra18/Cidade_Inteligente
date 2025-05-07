import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/home';
import Cadastro from './cadastro/cadastro';
import Login from './login/login';


function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
