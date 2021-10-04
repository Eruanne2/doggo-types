import React from 'react';
import './assets/reset.css';
import './assets/application.css';
import Header from './components/Header';
import BreedIndex from './components/BreedIndex';
import ImageIndex from './components/ImageIndex';

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
