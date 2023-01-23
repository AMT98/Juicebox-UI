import React from 'react';

const Footer = () => (
  <footer className='page-footer font-small blue pt-4'>
    <div className='container-fluid text-center text-md-left'>
      <div className='row'>
        <div className='col-md-6 mt-md-0 mt-3'>
          <h5 className='text-uppercase text-white'>Juicebox</h5>
          <p className='text-white'>
            Created by: <br></br>Vincent Palomo & Aswin Malla
          </p>
        </div>

        <hr className='clearfix w-100 d-md-none pb-0' />

        <div className='col-md-3 mb-md-0 mb-3'>
          <h5 className='text-uppercase text-white'>Vincent's Socials</h5>
          <ul className='list-unstyled'>
            <li>
              <a href='#!'>Github</a>
            </li>
            <li>
              <a href='#!'>LinkedIn</a>
            </li>
            <li>
              <a href='#!'>Link 3</a>
            </li>
            <li>
              <a href='#!'>Link 4</a>
            </li>
          </ul>
        </div>

        <div className='col-md-3 mb-md-0 mb-3'>
          <h5 className='text-uppercase text-white'>Aswin's Socials</h5>
          <ul className='list-unstyled'>
            <li>
              <a href='#!'>Github</a>
            </li>
            <li>
              <a href='#!'>LinkedIn</a>
            </li>
            <li>
              <a href='#!'>Link 3</a>
            </li>
            <li>
              <a href='#!'>Link 4</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className='footer-copyright text-center py-3 text-white'>
      © 2023 Copyright: Juicebox
    </div>
  </footer>
);

export default Footer;
