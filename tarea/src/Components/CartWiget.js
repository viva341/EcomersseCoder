import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Cart({ cartItems }) {
  return (
    <div className="ml-2">
      <button className="btn btn-sm btn-primary">
        <FontAwesomeIcon icon={faShoppingCart} /> 
      </button>
      <span className="badge badge-pill badge-warning ml-2">{cartItems.length}</span>
    </div>
  );
}

export default Cart;
