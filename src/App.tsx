import { useEffect, useState } from 'react';
import { getAllDogs } from './redux/dogActions';
import { useAppDispatch, useAppSelector } from './redux/typedHooks';
import './assets/reset.css';
import './assets/application.css';
import Header from './components/Header';
import BreedIndex from './components/BreedIndex';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllDogs() as any) // better solution?
  }, []);

  const allDogs = useAppSelector(state => Object.keys(state.dogs));
  const [searchVal, setSearchVal] = useState<string>('');

  
  const updateSearch = (inputVal: string) => {
    setSearchVal(inputVal);
  };

  const dogs = allDogs.filter((breed: string) => breed.includes(searchVal));

  return (
    <div className="App">
      <Header updateSearch={updateSearch}/>
      <BreedIndex dogs={dogs} searching={searchVal !== ''}/>
    </div>
  );
}



export default App;
