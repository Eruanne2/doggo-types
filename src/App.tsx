import React from 'react';
import logo from './assets/dog-logo.svg';
import './assets/App.css';
import Header from './Header';
import BreedIndex from './BreedIndex';
import ImageIndex from './ImageIndex';

function App() {
  return (
    <div className="App">
      <Header/>
      <BreedIndex/>
      <ImageIndex/>
    </div>
  );
}

export default App;
