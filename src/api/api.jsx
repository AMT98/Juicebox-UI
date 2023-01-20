const APIURL = 'https://juicebox-gu05.onrender.com/api';

// fetch all posts
export const fetchAllPosts = async () => {
  const res = await fetch(`${APIURL}/posts`);
  const json = await res.json();
  return json;
};
