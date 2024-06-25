import React, { useState, useEffect } from 'react';

const Detalles = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Obtener detalles del post
    const obtenerDetalles = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const postData = await response.json();
      setPost(postData);
    };

    obtenerDetalles();
  }, [postId]);

  if (!post) {
    return <p>Cargando detalles del post...</p>;
  }

  return (
    <div>
      <h2>Detalles del Post</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default Detalles;
