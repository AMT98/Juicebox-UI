import React, { useState } from 'react';
import { fetchLogin } from '../api/api';
import { Link } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'))

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsername('');
    setPassword('');

    try {
      const login = await fetchLogin(username, password);
      if (!login.success) {
        console.log(login.token);
        setErrorMessage(login.message);
        localStorage.setItem('token', login.token);
        window.location="/"
      }
    } catch (error) {
      console.error('error in login', error);
    }
  };
  return (
    <section className='vh-100'>
      <div className='container py-5 h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
            <div className='card bg-dark text-white'>
              <div className='card-body p-5 text-center'>
                  {!token ? 
                <div className='mb-3'>
                  <h2 className='fw-bold mb-2 text-uppercase'>Juicebox</h2>
                  <p className='text-white-50 mb-5'>
                    Please enter your login and password!
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className='form-outline form-white mb-4'>
                      <input
                        className='form-control form-control-lg'
                        type='text'
                        name='username'
                        value={username}
                        placeholder='Username'
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className='form-outline form-white mb-4'>
                      <input
                        className='form-control form-control-lg'
                        type='password'
                        name='password'
                        value={password}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <span>
                      <button
                        className='btn btn-outline-light btn-lg px-5 mb-1'
                        type='submit'
                      >
                        Login
                      </button>
                    </span>
                    {/* <p className='my-2 text-danger'>{errorMessage}</p> */}
                  </form>
                  <div>
                    <p className='mb-0'>
                      Don't have an account?{' '}
                      <Link className='text-white-50 fw-bold' to='/register'>
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
                    :
                    <>
                    <h1>You're logged in!</h1>
                    <p>Please navigate to posts.</p>
                    </>
                    }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
