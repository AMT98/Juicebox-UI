import React from 'react';

const Home = () => {
  return (
    <section className='vh-100'>
      <div className='container py-5 h-100'>
        <div className='card mb-3 bg-dark text-white'>
          <div className='row g-0 justify-content-between align-items-center'>
            <div className='col-md-4'>
              <img
                src='https://images.unsplash.com/photo-1673840278212-62435e35dc24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                alt='login'
                className='img-fluid rounded-start'
              />
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title'>Juicebox</h5>
                <p className='card-text'>A tumblr clone fullstack project</p>
                <span className='px-5'>
                  <a className='btn btn-outline-light px-5 m-2' href='/login'>
                    Login
                  </a>
                  <a className='btn btn-outline-light px-5' href='/register'>
                    Register
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
