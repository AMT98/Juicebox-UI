import React, { useState, useEffect } from 'react';
import { Routes, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Register from './Register';
import Login from './Login';
import Home from './Home';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
