import React, { useState } from "react";
import { fetchAddPost } from "../api/api";

const AddPost = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags ] = useState('')
  const [image, setImage ] = useState('')

  const handleAddPost = async (e) => {
    e.preventDefault();
    setTitle('');
    setContent('');
    setTags('');
    setImage('')
    try {
      const res = await fetchAddPost(
        title,
        content,
        tags,
        image
      );
      console.log(res)
    }catch(error){
      console.log(error);
    }
  }
  return(
    <form onSubmit={handleAddPost}>
      <label>
        title:
        <input
        type='text'
        name= 'title'
        value = {title}
        onChange= {(e) => setTitle(e.target.value)}
        required
        >
        </input>
      </label>

      <label>
        Content:
        <textarea
        type='text'
        name= 'content'
        value = {content}
        onChange= {(e) => setContent(e.target.value)}
        required
        >
        </textarea>
      </label>

      <label>
        Tags:
        <input
        type='text'
        name= 'tags'
        value = {tags}
        onChange= {(e) => setTags(e.target.value)}
        required
        >
        </input>
      </label>
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

      <button
      type="submit">
        Create
      </button>
    </form>
  )
}

export default AddPost;
