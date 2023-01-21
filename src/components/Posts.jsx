import React from 'react';

const Posts = () => {
  return (
    <section className='d-md-flex justify-content-md-center align-items-md-center'>
      <div
        className='card text-light bg-dark border rounded border-2 shadow-lg bounce animated'
        style={{ width: '512px' }}
      >
        <div className='card-body' style={{ width: '512px' }}>
          <h4 className='card-title'>Title</h4>
          <p className='card-text'>
            Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non
            mi porta gravida at eget metus.
          </p>
          <p className='text-white-50'>#tags</p>
        </div>
      </div>
    </section>
  );
};

export default Posts;
