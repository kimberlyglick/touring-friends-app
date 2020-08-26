import React from 'react';
import bus from './design/bus.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body className="App-body">
        <img src={bus} className="Header-image"/>
          <p>
            Kimberly and Emily Make something together!
          </p>
      </body>
    </div>
  );
}

export default App;
