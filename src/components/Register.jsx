import React from 'react';
import { useState } from 'react';
import { fetchRegister } from '../api/api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsername('');
    setPassword('');
    setName('');
    setLocation('');

    try {
      const register = await fetchRegister(username, password, name, location);
      if (!register.success) {
        setErrorMessage(register.message);
      }
    } catch (error) {
      console.error('error in register fetechregister', error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Username:</label>
          <input
            className='form-control'
            type='text'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Password:</label>
          <input
            className='form-control'
            type='text'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Name:</label>
          <input
            className='form-control'
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Location:</label>
          <input
            className='form-control'
            type='text'
            name='location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <span>
          <button className='btn btn-primary' type='submit'>
            Create Account
          </button>
        </span>
        <p>{errorMessage}</p>
      </form>
    </div>
  );
};

export default Register;
