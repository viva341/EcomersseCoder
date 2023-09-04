import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a Elite Fitness!" /> 
    </div>
  );
}

export default App;
