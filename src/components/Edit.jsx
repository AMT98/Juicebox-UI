import React, { useState } from "react";
import Popup from "./Popup";
import { fetchEditPost } from "../api/api";

const Edit = ({ JWTtoken, ID, postTitle, postContent, postTags }) => {
  const [title, setTitle] = useState(postTitle);
  const [content, setContent] = useState(postContent);
  const [tags, setTags] = useState(postTags);
  const [postID, setPostID] = useState(ID);

  const handleEdit = async (e) => {
    e.preventDefault();
    setTitle("");
    setContent("");
    setTags("");

    try {
      const editPost = await fetchEditPost(
        JWTtoken,
        postID,
        title,
        content,
        tags
      );
      console.log(editPost);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Popup
      btnTxt={<span className="material-symbols-outlined">edit</span>}
      modalTitle="Edit Post"
      handleSubmit={handleEdit}
      submitBtnTxt="SAVE CHANGES"
      color="secondary"
    >
      <form className="addForm">
        <label>Title:</label>
        <input
          className="addInput"
          type="text"
          placeholder="Title*"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Content:</label>
        <input
          className="addInput"
          type="text"
          placeholder="Description*"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></input>
        <label>Tags:</label>
        <input
          className="addInput"
          type="text"
          placeholder="Price*"
          required
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        ></input>
      </form>
    </Popup>
  );
};

export default Edit;
