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
          <h1>Tour Friends!</h1>
          <h2>...or Same City...</h2>
          <h3>...or any other name...</h3>
          <p>
            In which Kimberly and Emily together make something that would have been helpful to touring professional back when there was such a thing as touring professionals.
          </p>
      </body>
    </div>
  );
}

export default App;
