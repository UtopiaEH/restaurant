import React from 'react'
import { connect } from "react-redux";
import { setSearchWord } from "../../../redux/actions";
import { SEARCH_INPUT_TEXT } from "../../constants";
import { StyledSearchBar } from "./StyledSearchBar";

function SearchBar({ setSearchWord }) {

  return (
    <StyledSearchBar
      placeholder={ SEARCH_INPUT_TEXT }
      onSearch={ setSearchWord }
      enterButton
    />
  )
}

const mapDispatchToProps = {
  setSearchWord,
}

export default connect(null, mapDispatchToProps)(SearchBar)