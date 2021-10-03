import React from 'react';
import './assets/reset.css';
import './assets/application.css';
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
