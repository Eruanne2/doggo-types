import { useEffect, useState } from 'react'
import '../assets/breedIndex.css';
import { getAllDogs } from '../redux/dogActions';
import { useAppDispatch, useAppSelector } from '../redux/typedHooks';
import loadingGif from '../assets/loading.gif'
import ImageIndex from './ImageIndex';

export default function BreedIndex() {
  const dogs = useAppSelector(state => Object.keys(state.dogs));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllDogs() as any) // better solution?
  }, []);

  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className='breed-index-container'>
      {
        dogs.length === 0 ?
        <div className='loading-container'>
          <img src={loadingGif} alt='Fetching...'/>
        </div>
        :
        <div>
          <div className='grid'>
            {dogs.slice(0,12).map((breed, i) => (
              <li 
                key={i} 
                className={selected === breed ? 'selected' : ''}
                onClick={() => setSelected(breed)}
              >{breed}</li>
            ))}
          </div>
          {
            !selected ?
            null
            :
            <ImageIndex selected={selected}/>
          }
        </div>
      }
    </div>
  )
}