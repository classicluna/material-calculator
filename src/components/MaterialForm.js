import React, { useState } from 'react';
import './MaterialForm.css';

const MaterialForm = ({ calculateMaterials }) => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [quantity, setQuantity] = useState('');
  const [materialName, setMaterialName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateMaterials({ length, width, height, quantity, materialName });
  };

  return (
    <form onSubmit={handleSubmit} className='material-form'>
      <label>
        Length (ft):
        <input
          type='number'
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </label>
      <label>
        Width (ft):
        <input
          type='number'
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </label>
      <label>
        Height (ft):
        <input
          type='number'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <label>
        Quantity:
        <input
          type='number'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>
      <label>
        Material Type:
        <input
          type='text'
          value={materialName}
          onChange={(e) => setMaterialName(e.target.value)}
        />
      </label>
      <button type='submit'>Calculate Materials</button>
    </form>
  );
};

export default MaterialForm;
