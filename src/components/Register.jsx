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
        setErrorMessage(register.error.message);
      }
    } catch (error) {
      console.error('error in register fetechregister', error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type='text'
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type='text'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Name:</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Location:</label>
        <input
          type='text'
          name='location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <span>
          <button type='submit'>Create Account</button>
        </span>
        <p>{errorMessage}</p>
      </form>
    </div>
  );
};

export default Register;
