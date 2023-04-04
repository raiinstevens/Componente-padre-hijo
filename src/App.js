import React, { useState } from 'react';

function ComponentHijo({ onChildSubmit }) {
  const [entrada1, setEntrada1] = useState('');
  const [entrada2, setEntrada2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onChildSubmit(entrada1, entrada2);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        entrada 1
        <input type="text" value={entrada1} onChange={(e) => setEntrada1(e.target.value)} />
      </label>
      <label>
        entrada 2
        <input type="text" value={entrada2} onChange={(e) => setEntrada2(e.target.value)} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ComponentHijo;