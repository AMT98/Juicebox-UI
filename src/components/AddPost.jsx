import React, { useState } from "react";
import { fetchAddPost } from "../api/api";
import Popup from "./Popup";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  // const [image, setImage] = useState('');

  const token = localStorage.getItem("token");
  console.log("token in addpost", token);

  const handleAddPost = async (e) => {
    e.preventDefault();
    setTitle("");
    setContent("");
    setTags("");
    // setImage('');
    try {
      const res = await fetchAddPost(
        token,
        title,
        content,
        tags
        // image
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Popup
      btnTxt={<span className="material-symbols-outlined">edit</span>}
      modalTitle="Add Post"
      handleSubmit={handleAddPost}
      submitBtnTxt="Create"
      color="info"
    >
      <form className="addForm">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        ></input>

        <label>Content:</label>
        <textarea
          type="text"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>

        <label>Tags:</label>
        <input
          type="text"
          name="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          required
        ></input>
        {/* 
      <label>
        Image:
        <textarea
        type='image'
        name= 'image'
        value = {image}
        onChange= {(e) => setImage(e.target.value)}
        required
        >
        </textarea>
      </label> */}
      </form>
    </Popup>
  );
};

export default AddPost;
