import React from 'react';
import HelloWorld from './HelloWorld';
import Grahl from './Grahl';
import Elem1 from './Elem1';
import './App.css';

function App() {
  return (
    <div>
      <div className="Elem1">
        <Elem1 />
      </div>
      <div className="Grahl">
        <Grahl />
      </div>
      <div className="HelloWorld">
        <HelloWorld />
      </div>
    </div>
  );
}

export default App;


