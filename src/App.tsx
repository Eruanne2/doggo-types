import React from 'react';
import './assets/reset.css';
import './assets/application.css';
import Header from './components/Header';
import BreedIndex from './components/BreedIndex';

function App() {
  return (
    <div className="App">
      <Header/>
      <BreedIndex/>
    </div>
  );
}



export default App;
