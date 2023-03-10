import React, { useState } from 'react';
import { fetchRegister } from '../api/api';
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [avatar, setAvatar] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsername('');
    setPassword('');
    setName('');
    setLocation('');
    setAvatar('https://tinyurl.com/2p82ydm4');

    try {
      const register = await fetchRegister(
        username,
        password,
        name,
        location,
        avatar
      );
      if (!register.success) {
        setErrorMessage(register.message);
      } else {
        window.location = '/login';
      }
    } catch (error) {
      console.error('error in register fetechregister', error);
    }
  };
  return (
    <section className='vh-100'>
      <div className='container py-5 h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
            <div className='card bg-dark text-white'>
              <div className='card-body p-5 text-center'>
                <h2 className='fw-bold mb-2 text-uppercase'>Register</h2>
                <p className='text-white-50 mb-5'>
                  Please enter your username, password, name and location!
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
                      required
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
                      required
                    />
                  </div>
                  <div className='form-outline form-white mb-4'>
                    <input
                      className='form-control form-control-lg'
                      type='text'
                      name='name'
                      value={name}
                      placeholder='Name'
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className='form-outline form-white mb-4'>
                    <input
                      className='form-control form-control-lg'
                      type='text'
                      name='location'
                      value={location}
                      placeholder='Location'
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    />
                  </div>
                  <div className='form-outline form-white mb-4'>
                    <input
                      className='form-control form-control-lg'
                      type='text'
                      name='location'
                      value={avatar}
                      placeholder='Avatar URL'
                      onChange={(e) => setAvatar(e.target.value)}
                      required
                    />
                  </div>
                  <span>
                    <button
                      className='btn btn-outline-light btn-lg px-5'
                      type='submit'
                    >
                      Create Account
                    </button>
                  </span>
                  <p className='my-2 text-danger'>{errorMessage}</p>
                </form>
                <div>
                  <p className='mb-0'>
                    Have an account?{' '}
                    <Link className='text-white-50 fw-bold' to='/login'>
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
