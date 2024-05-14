import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const Posts = () => {
  const { postList, loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div>
      <h1>Post List</h1>
      {loading && <h2>Loading</h2>}
      {error && <h2>{error}</h2>}
      {!loading && !error && (
        <ul>
          {postList.map((post, index) => (
            <li key={`key-${index}`}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Posts;
