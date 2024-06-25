import React, { useState, useEffect } from 'react';

const EditarForm = ({ postId }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    // Obtener datos del post para editar
    const obtenerPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const postData = await response.json();
      setTitle(postData.title);
      setBody(postData.body);
    };

    obtenerPost();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Actualizar el post
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: postId,
        title,
        body,
        userId: 1 // Asumiendo un usuario estático por ahora
      }),
    });

    if (!response.ok) {
      console.error('Error al actualizar el post');
      return;
    }

    const data = await response.json();
    console.log('Post actualizado:', data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Post</h2>
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Contenido:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <button type="submit">Actualizar Post</button>
    </form>
  );
};

export default EditarForm;
