import { ChangeEvent } from 'react';
import '../assets/header.css';

export default function Header(props: { updateSearch: (val: string) => void}) {
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    e.preventDefault();
    props.updateSearch(target.value);
  }
  
  return (
    <header>
      <h1>Dogs!</h1>
      <div>
        <input type='text' placeholder='Search' onChange={(e) => handleChange(e)}/>
      </div>
    </header>
  )
}