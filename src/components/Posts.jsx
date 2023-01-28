import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllPosts, fetchAllUsers } from '../api/api';
import AddPost from './AddPost';
import DeletePost from './DeletePost';
import Edit from './Edit';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const token = localStorage.getItem('token');

  const fetchPosts = async () => {
    try {
      const post = await fetchAllPosts();
      console.log(post);
      setPosts(post);
    } catch (error) {
      console.error('error in post fetchpost', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const user = await fetchAllUsers();
      console.log(user);
      setUsers(user);
    } catch (error) {
      console.error('error in post fetchuser', error);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchUsers();
  }, []);

  return (
    <div className='min-vh-100'>
      <div className='container d-md-flex  justify-content-md-center align-items-md-center my-3'>
        {/* <h1 className="text-white">J</h1> */}
        <form className='m-3'>
          <div
            className='d-md-flex text-white searchBar'
            style={{ height: '50px', width: '30em' }}
          >
            <input
              className='form-control text-white '
              style={{ height: '50px' }}
              type='search'
              placeholder='Search Juicebox'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
            {token ? (
              <span className='m-1'>
                <AddPost />
              </span>
            ) : null}
          </div>
        </form>
      </div>
      <div className='container d-md-flex justify-content-md-center align-items-md-center my-3 m-auto'>
        <div className='row'>
          <div className='col'>
            {posts
              .filter((value) => {
                if (searchTerm === '') {
                  return value;
                } else if (
                  value.author.username
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return value;
                } else if (
                  value.content.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return value;
                } else if (
                  value.tags[0].name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return value;
                } else if (
                  value.tags[1].name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((post) => {
                return (
                  <section className='row'>
                    <div
                      className='col-lg-1 mt-4 mx-5'
                      style={{ width: '100px' }}
                    >
                      {users.map((user) => {
                        // console.log(user.avatar);
                        if (user.id === post.author.id) {
                          console.log(post.author.id);
                          console.log(user.avatar);
                          return (
                            <img
                              className='rounded'
                              src={user.avatar}
                              alt=''
                              width={100}
                              height={100}
                            />
                          );
                        }
                      })}
                      {/* <img
                        className='rounded'
                        src='https://tinyurl.com/4ed5r99s'
                        alt=''
                        width={100}
                        height={100}
                      /> */}
                    </div>
                    <div
                      className='card text-light bg-dark rounded shadow-lg bounce animated row my-3'
                      style={{ width: '570px' }}
                      key={post.id}
                    >
                      <div className='card-body col-lg-7'>
                        <div style={{ width: '512px' }}>
                          <h5 className='card-title pb-3'>
                            {post.author.username}
                          </h5>
                          <p className='card-text'>{post.content}</p>
                          <span>
                            {post.tags.map((tag) => {
                              return (
                                <Link
                                  to={`/tags/${tag.name}/posts`}
                                  className='text-white-50 text-decoration-none m-1'
                                >
                                  {tag.name}
                                </Link>
                              );
                            })}
                          </span>
                          {/* buttons */}
                          {token && (
                            <div className='m-3 editDeleteBtn '>
                              <DeletePost
                                JWTtoken={token}
                                ID={post.id}
                              ></DeletePost>
                              <Edit
                                JWTtoken={token}
                                ID={post.id}
                                postTitle={post.title}
                                postContent={post.content}
                                postTags={
                                  (post.tags[0].name, post.tags[1].name)
                                }
                              ></Edit>
                            </div>
                          )}
                          <hr></hr>
                          <br />
                          <div className='mx-3'>
                            <span className='material-symbols-outlined mx-5'>
                              google_plus_reshare
                            </span>
                            <span className='material-symbols-outlined mx-5'>
                              maps_ugc
                            </span>
                            <span className='material-symbols-outlined mx-5'>
                              repeat
                            </span>
                            <span className='material-symbols-outlined mx-5'>
                              favorite
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
