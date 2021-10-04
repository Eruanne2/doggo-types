import { ChangeEvent } from 'react';

export default function SearchBar(props: { updateSearch: (val: string) => void}) {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    e.preventDefault();
    props.updateSearch(target.value);
  }
  return (
    <div>
      <input type='text' placeholder='Search' onChange={(e) => handleChange(e)}/>
    </div>
  )
}
