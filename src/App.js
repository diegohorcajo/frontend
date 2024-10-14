
import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Hacer una petición al backend para obtener el mensaje
    fetch('http://localhost:3000/api')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error al obtener los datos:', error));
  }, []);

  return (
    <div>
      <h1>Bienvenido a la Plataforma de dndoi</h1>
      <p>Mensaje del backend: {message}</p>
    </div>
  );
}

export default App;

