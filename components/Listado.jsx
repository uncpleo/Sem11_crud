import React, { useState, useEffect } from 'react';

const Listado = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Obtener lista de posts
    const obtenerPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const postData = await response.json();
      setPosts(postData);
    };

    obtenerPosts();
  }, []);

  return (
    <div>
      <h2>Listado de Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listado;
