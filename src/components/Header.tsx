import SearchBar from './SearchBar'
import '../assets/header.css';

export default function Header(props: { updateSearch: (val: string) => void}) {
  return (
    <header>
      <h1>Dogs!</h1>
      <SearchBar updateSearch={props.updateSearch}/>
    </header>
  )
}