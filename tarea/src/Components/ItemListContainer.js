import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>{greeting}</h2>
    </div>
  );
};


const containerStyle = {
  textAlign: 'center',
  backgroundColor: '#f0f0f0',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const headingStyle = {
  fontSize: '24px',
  color: '#333',
};

export default ItemListContainer;
