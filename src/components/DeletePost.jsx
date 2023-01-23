import React, {useState} from "react";
import Popup from "./Popup";
import { fetchDeletePost } from "../api/api";

const DeletePost = ({ JWTtoken, ID }) => {
  const [token, setToken] = useState(JWTtoken)
  const [postID, setPostID] = useState(ID)

const handleDeletePost = async () => {
    try {
      const deletePost = await fetchDeletePost(token, postID);
      console.log(deletePost);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Popup
      btnTxt={<span className="material-symbols-outlined">delete</span>}
      modalTitle = "Delete"
      handleSubmit={handleDeletePost}
      submitBtnTxt = "Yes"
      color= "danger"
    >
      <p>Are you sure you want to delete this post?</p>
    </Popup>
  );
};

export default DeletePost;
