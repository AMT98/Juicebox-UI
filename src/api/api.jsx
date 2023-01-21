// API on Aswin's Server
const APIURL = 'https://juicebox-gu05.onrender.com/api';

// API on Vincent's Server
// const APIURL = 'https://juicebox-ywg0.onrender.com/api';

// fetch all posts
export const fetchAllPosts = async () => {
  const res = await fetch(`${APIURL}/posts`);
  const json = await res.json();
  return json.posts;
};

// fetch all users
export const fetchAllUsers = async () => {
  const res = await fetch(`${APIURL}/users`);
  const json = await res.json();
  return json;
};

// get post by tags
export const fetchPostByTags = async (tagName) => {
  const res = await fetch(`${APIURL}/tags/${tagName}/posts`);
  const json = res.json();
  return json;
};

// register user
export const fetchRegister = async (username, password, name, location) => {
  const res = await fetch(`${APIURL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`,
      name: `${name}`,
      location: `${location}`,
    }),
  });
  const json = await res.json();
  return json;
};

// login user
export const fetchLogin = async (username, password) => {
  const res = await fetch(`${APIURL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`,
    }),
  });
  const json = await res.json();
  return json;
};

// authorization check & logged in user
export const fetchLoggedInUser = async (token) => {
  const res = await fetch(`${APIURL}/posts`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await res.json();
  return json;
};

// create post
export const fetchAddPost = async (token, title, content, tags) => {
  const res = await fetch(`${APIURL}/posts`, {
    method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json',
    //   // Authorization: `Bearer ${token}`,
    // },
    body: JSON.stringify({
      body: {
        title: `${title}`,
        content: `${content}`,
        tags: `${tags}`,
      },
    }),
  });
  const json = await res.json();
  return json;
};

// edit post
export const fetchEditPost = async (token, postID, title, content, tags) => {
  const res = await fetch(`${APIURL}/posts/${postID}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: `${title}`,
      content: `${content}`,
      tags: `${tags}`,
    }),
  });
  const json = await res.json();
  return json;
};

// delete/deactivate post
export const fetchDeletePost = async (token, postID) => {
  const res = await fetch(`${APIURL}/posts/${postID}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await res.json();
  return json;
};

// delete/deactivate user
export const fetchDeleteUser = async (token, userID) => {
  const res = await fetch(`${APIURL}/users/${userID}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await res.json();
  return json;
};

// activate user
export const fetchActivateUser = async (token, userID) => {
  const res = await fetch(`${APIURL}/users/${userID}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await res.json();
  return json;
};
