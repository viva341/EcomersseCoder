import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import arrayProductos from '../../Json/arrayProductos.json';

const ItemDetail = () => {
  const { id } = useParams();
  const item = arrayProductos.find((product) => product.id === parseInt(id));

  const [cart, setCart] = useState([]);

  const addToCart = () => {
   
    setCart([...cart, item]);
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className='row'>
      <div className='col-md-4 offset-md-4'>
        <img src={item.imagen} className='img-fluid' alt={item.nombre} />
        <h2>{item.nombre}</h2>
        <p>{item.descripcion}</p>
        <p>$ {item.precio}</p>
        <p>Cantidad: {item.stock}</p>
        <button className='btn btn-primary' onClick={addToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
