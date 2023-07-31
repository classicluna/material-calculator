import React from 'react';
import './MaterialResult.css';

const MaterialResult = ({ materialName, materialQuantity }) => {
  return (
    <div className='material-result'>
      <h2>Material Quantity Estimate</h2>
      <p>
        <strong>Material:</strong> {materialName}
      </p>
      <p>
        <strong>Estimated Quantity:</strong> {materialQuantity} ft<sup>2</sup>
      </p>
    </div>
  );
};

export default MaterialResult;
