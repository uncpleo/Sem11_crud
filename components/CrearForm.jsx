import React, { useState } from 'react';

const CrearForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Aquí iría la lógica para enviar los datos a la API
      console.log('Datos a enviar:', { title, body });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Título:</label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='body'>Cuerpo:</label>
        <textarea
          id='body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <button type='submit'>Crear Post</button>
    </form>
  );
};

export default CrearForm;

