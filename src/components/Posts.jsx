import React, { useState, useEffect } from "react";
import { fetchAllPosts, fetchDeletePost } from "../api/api";
import AddPost from "./AddPost";
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

  const handleDeletePost = async (postID, token) => {
    try {
      const deletePost = await fetchDeletePost(postID, token);
      console.log(deletePost);
      fetchPosts();
    } catch (error) {
      console.error("error in post delete fn", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="container d-md-flex justify-content-md-center align-items-md-center my-3">
        <h1>POSTS</h1>
        <form>
          <AddPost />
          <input
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </form>
      </div>
      <div className="container d-md-flex justify-content-md-center align-items-md-center my-3">
        <div className="row">
          <div className="col">
            {posts
              .filter((value) => {
                if (searchTerm === "") {
                  return value;
                } else if (
                  value.author.username.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return value;
                } else if (
                  value.content
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return value;
                }
                //  else if (
                //   value.location
                //     .toLowerCase()
                //     .includes(searchTerm.toLowerCase())
                // ) 
                // {
                //   return value;
                // }
              })
              .map((post) => {
                return (
                  <div
                    className="card text-light bg-dark border rounded border-2 shadow-lg bounce animated col"
                    style={{ width: "512px" }}
                    key={post.id}
                    >
                    <div className="card-body" style={{ width: "512px" }}>
                      <h4 className="card-title">{post.title}</h4>
                      <p className="card-text">{post.content}</p>
                      <p className="text-white-50">
                        {post.tags[0].name} {post.tags[1].name}
                      </p>
                      <button onClick={() => handleDeletePost(post.id, token)}>
                        Delete
                      </button>
                      <Edit 
                      JWTtoken = {token}
                      ID = {post.id}
                      postTitle = {post.title}
                      postContent = {post.content}
                      postTags = {(post.tags[0].name , post.tags[1].name)}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
