import React, { useState } from 'react';
import MaterialForm from './components/MaterialForm';
import MaterialResult from './components/MaterialResult';
import './App.css';

const App = () => {
  const [materialName, setMaterialName] = useState('');
  const [materialQuantity, setMaterialQuantity] = useState(null);

  const calculateMaterials = ({
    length,
    width,
    height,
    quantity,
    materialName,
  }) => {
    const totalVolume = length * width * height;
    const estimatedQuantity = totalVolume * quantity;

    setMaterialName(materialName); // Replace this with the actual material name
    setMaterialQuantity(estimatedQuantity);
  };

  return (
    <div className='app'>
      <h1>Material Quantity Calculator</h1>
      <MaterialForm calculateMaterials={calculateMaterials} />
      {materialQuantity !== null && (
        <MaterialResult
          materialName={materialName}
          materialQuantity={materialQuantity}
        />
      )}
    </div>
  );
};

export default App;
