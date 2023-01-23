import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchAllPosts, fetchDeletePost } from "../api/api";
import AddPost from "./AddPost";
import DeletePost from "./DeletePost";
import Edit from "./Edit";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const token = localStorage.getItem("token");

  const fetchPosts = async () => {
    try {
      const post = await fetchAllPosts();
      console.log(post);
      setPosts(post);
    } catch (error) {
      console.error("error in post fetchpost", error);
    }
  };


  useEffect(() => {
    fetchPosts();
  }, [token]);

  return (
    <div className="vh-auto">
      <div className="container d-md-flex  justify-content-md-center align-items-md-center my-3">
        {/* <h1 className="text-white">J</h1> */}
        <form className="m-3">
          <div className="d-md-flex" style={{ height: "50px", width: "40em" }}>
            <input
              className="m-1 form-control"
              style={{ height: "50px" }}
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
            <span className="m-1">
              <AddPost />
            </span>
          </div>
        </form>
      </div>
      <div className="container d-md-flex justify-content-md-center align-items-md-center my-3 m-auto">
        <div className="row">
          <div className="col">
            {posts
              .filter((value) => {
                if (searchTerm === "") {
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
                  <section className="row">
                    <div
                      className="col-lg-1 mt-4 mx-5"
                      style={{ width: "100px" }}
                    >
                      <img
                        className="rounded"
                        src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                    <div
                      className="card text-light bg-dark rounded shadow-lg bounce animated row my-3"
                      style={{ width: "570px" }}
                      key={post.id}
                    >
                      <div className="card-body col-lg-7">
                        <div style={{ width: "512px" }}>
                          <h5 className="card-title pb-3">
                            {post.author.username}
                          </h5>
                          <p className="card-text">{post.content}</p>
                          <span>
                            <Link
                              to={`/tags/${post.tags[0].name}/posts`}
                              className="text-white-50 text-decoration-none m-1"
                            >
                              {post.tags[0].name}
                            </Link>
                            <Link
                              to={`/tags/${post.tags[1].name}/posts`}
                              className="text-white-50 text-decoration-none m-1"
                            >
                              {post.tags[1].name}
                            </Link>
                          </span>
                          {/* buttons */}
                          {token && (
                            <div className="m-3 ">
                              <DeletePost
                               postID = {post.id}
                               token = {token}
                              >
                               
                              </DeletePost>
                              <Edit
                                JWTtoken={token}
                                ID={post.id}
                                postTitle={post.title}
                                postContent={post.content}
                                postTags={
                                  (post.tags[0].name, post.tags[1].name)
                                }
                              >
                              </Edit>
                            </div>
                          )}
                          <hr></hr>
                          <br />
                          <div className="mx-3">
                            <span class="material-symbols-outlined mx-5">
                              google_plus_reshare
                            </span>
                            <span class="material-symbols-outlined mx-5">
                              maps_ugc
                            </span>
                            <span class="material-symbols-outlined mx-5">
                              repeat
                            </span>
                            <span class="material-symbols-outlined mx-5">
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
