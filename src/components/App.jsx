import React, { useState, useEffect } from 'react';
import { Routes, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Posts from './Posts';
import AddPost from './AddPost';
import Account from './Account';
import Footer from './Footer';

const App = () => {
  return (
    <body className='bg-black'>
      {/* navbar */}
      <NavBar />
      {/* body */}
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/add' element={<AddPost />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </div>
      {/* footer */}
      <Footer />
    </body>
  );
};

export default App;
