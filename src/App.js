import React from 'react';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>InnoSTARK Technologies</h1>
      </header>
      <ProductList />
    </div>
  );
}

export default App;