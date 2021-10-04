import React from 'react'
import SearchBar from './SearchBar'
import '../assets/header.css';

export default function Header() {
  return (
    <header>
      <h1>Dogs!</h1>
      <SearchBar/>
    </header>
  )
}