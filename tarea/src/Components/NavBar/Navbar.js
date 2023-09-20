import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from '../CartWidget/CartWiget'; // Corrige la ruta de importación
import { NavLink } from 'react-router-dom'; // Importa NavLink para las rutas

function Navbar() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">EliteFitness</NavLink> 
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Inicio</NavLink> 
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/Creatinas">Creatinas</NavLink> 
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/Proteinas">Proteínas</NavLink> 
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/Preentrenos">Preentrenos</NavLink> 
          </li>
        </ul>
      </div>
      <Cart cartItems={cartItems} />
    </nav>
  );
}

export default Navbar;
