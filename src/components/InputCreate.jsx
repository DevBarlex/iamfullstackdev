import React, { useState } from 'react';

const InputCreate = () => {
  const [title, setTitle] = useState('');
  const urlApi = 'http://localhost:3000/create'; 

  const handleSubmit = async (e) => {
    e.preventDefault();  

    if (!title) {
      alert('Por favor, ingresa un título para la tarea.');
      return;
    }

    const payload = { title };  

    try {
      const response = await fetch(urlApi, {
        method: 'POST',  
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(payload),  
      });

      if (response.ok) {
        const result = await response.json();  
        console.log('Tarea agregada:', result);
        setTitle(''); 
      } else {
        console.error('Error al agregar tarea:', response.statusText);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div>
      <h2>Crear Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa el título de la tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}  
        />
        <button type="submit">Agregar Tarea</button>
      </form>
    </div>
  );
};

export default InputCreate;
