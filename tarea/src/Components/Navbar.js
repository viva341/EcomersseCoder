import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './CartWiget.js'; 

function Navbar() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">EliteFitness</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Planes de Entrenamiento</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Suplementación</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Nutrición</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
        </ul>
      </div>
      <Cart cartItems={cartItems} />
    </nav>
  );
}

export default Navbar;
