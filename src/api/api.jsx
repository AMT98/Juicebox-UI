const APIURL = 'https://juicebox-gu05.onrender.com/api';

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
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
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
