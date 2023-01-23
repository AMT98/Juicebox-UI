import React from "react";
import Popup from "./Popup";
import { fetchDeletePost } from "../api/api";

const DeletePost = ({ postID, token }) => {
  const handleDeletePost = async (postID, token) => {
    try {
      const deletePost = await fetchDeletePost(postID, token);
      console.log(deletePost);
    } catch (error) {
      console.error("error in post delete fn", error);
    }
  };
  return (
    <Popup
      btnTxt={<span class="material-symbols-outlined">delete</span>}
      modalTitle = "Delete"
      handleSubmit={handleDeletePost}
      submitBtnTxt = "Yes"
      color= "danger"
    >
      <h1>Are you sure you want to delete this post?</h1>
    </Popup>
  );
};

export default DeletePost;
