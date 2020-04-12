import React from 'react'
import { StyledSearchBar } from "./StyledSearchBar";

function SearchBar() {
  return (
    <StyledSearchBar
      placeholder="input search text"
      onSearch={ value => console.log(value) }
      enterButton
    />
  )
}

export default SearchBar