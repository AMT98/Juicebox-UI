import React, { useState } from 'react';
import { fetchLogin } from '../api/api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsername('');
    setPassword('');

    try {
      const login = await fetchLogin(username, password);
      if (!login.success) {
        setErrorMessage(login.message);
      }
    } catch (error) {
      console.error('error in login', error);
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
        />
        <label>Password:</label>
        <input
          type='text'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>
          <button type='submit'>Login</button>
        </span>
        <p>{errorMessage}</p>
      </form>
    </div>
  );
};

export default Login;
