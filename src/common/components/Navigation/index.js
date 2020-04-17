import React from 'react'
import { StyledNavigation } from "./StyledNavigation";

function Navigation() {
  return (
    <StyledNavigation simple defaultCurrent={1} total={50} />
  )
}

export default Navigation