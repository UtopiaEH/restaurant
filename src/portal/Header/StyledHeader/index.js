import styled from 'styled-components'
import { Layout } from "antd";

const { Header } = Layout


export const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: #001529;
  height: auto;
  
  .logo {
    font-size: 28px;
    color: #4781E6;
    font-weight: 700;
  }
`
