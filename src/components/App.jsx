import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Register from './Register';
import Login from './Login';

const App = () => {
  return (
    <>
      <NavBar />
      <Register />
      {/* <Login /> */}
    </>
  );
};

export default App;
