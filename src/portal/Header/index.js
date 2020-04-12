import React from 'react'
import SearchBar from "../../common/components/SearchBar";
import { StyledHeader } from "./StyledHeader";

function PortalHeader({ logoText }) {
  return (
    <StyledHeader className="header">
      <div className="logo">
        { logoText }
      </div>
      <SearchBar/>
    </StyledHeader>
  )
}

export default PortalHeader