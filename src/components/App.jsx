import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Register from './Register';

const App = () => {
  return (
    <>
      <NavBar />
      <Register />
    </>
  );
};

export default App;
