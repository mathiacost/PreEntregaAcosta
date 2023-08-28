import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      {/* Aquí puedes agregar el contenido de tu aplicación */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
