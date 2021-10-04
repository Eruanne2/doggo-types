import { useState } from 'react'
import '../assets/breedIndex.css';
import loadingGif from '../assets/loading.gif'
import ImageIndex from './ImageIndex';

export default function BreedIndex(props: { dogs: Array<string>, searching: boolean }) {
  const [selected, setSelected] = useState<string | null>(null);

  if (props.searching && selected !== null) setSelected(null);

  const dogs = props.dogs;

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