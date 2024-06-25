import React from 'react';
import CrearForm from '../components/CrearForm.jsx';
import Listado from '../components/Listado.jsx';

const Main = () => {
  return (
    <main className='container-main'>
      <div className='div-container'>
        <h4 className='main-title'>List CRUD</h4>
        <CrearForm />
        <Listado />
      </div>
    </main>
  );
};

export default Main;
