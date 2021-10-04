import { useEffect } from 'react'
import '../assets/breedIndex.css';
import { getAllDogs } from '../redux/dogActions';
import { useAppDispatch, useAppSelector } from '../redux/typedHooks';

export default function BreedIndex() {
  const dogs = useAppSelector(state => Object.keys(state.dogs));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllDogs() as any) // better solution?
  }, []);

  return (
    <div>
      {
        dogs.length === 0 ?
        <p>Dogs are loading...</p>
        :
        <div className='grid'>
          {dogs.slice(0,12).map((breed, i) => {
            return <li key={i}>{breed}</li>
          })}
          <li>hard coded dog 1</li>
          <li>hard coded dog 2</li>
        </div>
      }
    </div>
  )
}