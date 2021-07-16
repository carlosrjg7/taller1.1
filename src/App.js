import React from 'react';
import Parrafo from './components/Parrafo';

function App() {

  const lista = ['Cesar','Karen','Carlos','Andree','Efrain','Raul'];

  return (
    <div>
      {
        lista.map((nombre,index) => (
          <Parrafo name={nombre} numero={index} key={index} />
        ))
      }
    </div>
  );
}

export default App;
