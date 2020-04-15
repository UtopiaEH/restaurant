import styled from 'styled-components'
import { Layout } from "antd";

const { Header } = Layout

export const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #001529;
  height: 55px;
  
  .logo {
    font-size: 28px;
    color: #4781E6;
    font-weight: 700;
  }
`
