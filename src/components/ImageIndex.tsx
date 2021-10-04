import { useEffect, useState } from 'react';
import '../assets/ImageIndex.css';
import loadingGif from '../assets/loading.gif'
import { useAppSelector, useAppDispatch } from '../redux/typedHooks';
import { getBreedImages } from '../redux/dogActions';


export default function ImageIndex(props: { selected: string}) {
  const imgs = useAppSelector(state => state.dogs[props.selected]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBreedImages(props.selected) as any) // better solution?
  }, [props.selected]);


  let imgGrid: Array<Array<string>> = [[], [], [], []];
  imgs.forEach((img, i) => imgGrid[i % 4].push(img))

  return (
    <div className='img-index-container'>
      {
        imgs.length === 0 ?
        <div className='loading-container'>
          <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        :
        <div className='img-grid'>
          {imgGrid.map((row,i) => 
            <ul key={i} className='img-row'>
              {row.map((img,i) =>
                <img key={i} src={img}/>
              )}
            </ul>
          )}
        </div>
      }
    </div>
  )
}