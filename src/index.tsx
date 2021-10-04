import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ReactDOM from 'react-dom';
import './assets/reset.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getAllDogs, getBreedImages } from './redux/dogActions';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


document.addEventListener("DOMContentLoaded", () => {
  (window as any).store = store;
  (window as any).getAllDogs = getAllDogs;
  (window as any).getBreedImages = getBreedImages;
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
