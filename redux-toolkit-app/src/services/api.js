const API_URL = "https://jsonplaceholders.typicode.com";

export const fetchPostsApi = async () => {
  const res = await fetch(`${API_URL}/posts`);
  const data = await res.json();
  return data;
};
