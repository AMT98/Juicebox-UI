import React, { useState, useEffect } from 'react';
import { Routes, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Register from './Register';
import Login from './Login';
import Home from './Home';

const App = () => {
  return (
    <>
      {/* navbar */}
      <NavBar />
      {/* body */}
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
      {/* footer */}
    </>
  );
};

export default App;
