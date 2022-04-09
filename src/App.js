// Import
import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Menu from './Menu.jsx';
import Api from './Api.jsx'
import assetObj from './data';

function App() {
  // Lift up state
  const [asset, setAsset] = useState(Object.keys(assetObj)[0]);
  return (
    <div>
      <Header />
      <Menu setAsset={setAsset} />
      <Api asset={asset} />
    </div>
  );
}

export default App;
