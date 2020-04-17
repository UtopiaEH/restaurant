import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { HOME_TEXT } from "../../constants";
import { StyledCardMeal } from "../CardMeal/StyledCardMeal";
import ModalWindow from "../ModalWindow";

function MenuNav() {
  return (
    <Menu
      mode="inline"
      style={ { height: '100%' } }
    >
      <Menu.Item key="1">
        <Link to='/'>
          { HOME_TEXT }
        </Link>
      </Menu.Item>

      <ModalWindow/>
      <StyledCardMeal/>
    </Menu>
  )
}

export default MenuNav