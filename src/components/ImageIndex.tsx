import { useEffect, useState } from 'react';
import '../assets/ImageIndex.css';
import { useAppSelector, useAppDispatch } from '../redux/typedHooks';
import { getBreedImages } from '../redux/dogActions';


export default function ImageIndex(props: { selected: string}) {
  const imgs = useAppSelector(state => state.dogs[props.selected]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBreedImages(props.selected) as any) // better solution?
  }, [props.selected]);

  return (
    <div className='img-grid'>
      {imgs.map((img, i) => {
        return <img key={i} src={img}/>
      })}
    </div>
  )
}