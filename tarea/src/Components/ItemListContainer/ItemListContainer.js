import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import arrayProductos from '../../Json/arrayProductos.json';
import ItemList from '../ItemList/ItemList';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
          }, 2000);
        });
        setItems(data);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className='container'>
      <div className='row'>
        {items.map((item) => (
          <div className='col-md-4' key={item.id}>
            <Link to={`/item/${item.id}`}>
              <div className='card'>
                <img src={item.imagen} className='card-img-top' alt={item.nombre} />
                <div className='card-body'>
                  <h5 className='card-title'>{item.nombre}</h5>
                  <p className='card-text'>{item.descripcion}</p>
                  <p className='card-text'>$ {item.precio}</p>
                  <p className='card-text'>Cantidad: {item.stock}</p>
                  <button className='btn btn-primary'>Agregar al carrito</button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
