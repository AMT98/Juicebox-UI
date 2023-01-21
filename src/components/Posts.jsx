import React, { useState, useEffect } from 'react';
import { fetchAllPosts } from '../api/api';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const post = await fetchAllPosts();
      console.log(post);
      setPosts(post);
    } catch (error) {
      console.error('error in post fetchpost', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className='d-md-flex justify-content-md-center align-items-md-center'>
      {posts.map((post) => {
        return (
          <div
            className='card text-light bg-dark border rounded border-2 shadow-lg bounce animated'
            style={{ width: '512px' }}
            key={post.id}
          >
            <div className='card-body' style={{ width: '512px' }}>
              <h4 className='card-title'>{post.title}</h4>
              <p className='card-text'>{post.content}</p>
              <p className='text-white-50'>#tags</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Posts;
