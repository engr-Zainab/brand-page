import React, { useEffect, useState } from "react";

//api : https://jsonplaceholder.typicode.com/posts

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  //for filtering purpose
  const [searchTerm, setSearchTerm] = useState("");

  //for displaying loading indicator
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Response not ok!!");
      }
      const data = await response.json();

      setPosts(data.slice(0, 5));
    } catch (error) {
      setError(error.message);
      console.error("error fetching....,", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const postsFiltered = posts.filter((post) => {
    const postTitle = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return postTitle;
  });

  return (
    <div className="hero">
      <h3>Posts</h3>

      <input
        type="text"
        placeholder="Filter by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      {error && (
        <div>
          <p>Error: {error}</p>
          <button onClick={fetchPosts}>Retry</button>
        </div>
      )}

      {!loading && !error && (
        <ul>
          {postsFiltered.map((post) => (
            <li key={post.userId}>
              {post.title}
              <p>Title: {post.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostsList;
