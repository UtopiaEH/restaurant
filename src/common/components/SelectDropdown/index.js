import React from 'react'
import { Select } from 'antd';
import { MEALS, PLAN_MEAL } from "../../constants";

const { Option } = Select;

function SelectDropdown() {

  const handleChange = (value) => {
    console.log(`selected ${ value }`);
  }

  return (
    <Select defaultValue={ PLAN_MEAL } style={ { width: 120 } } onChange={ handleChange }>
      {
        MEALS.map((item) => (
          <Option value={ item }>{ item }</Option>
        ))
      }
    </Select>
  )
}

export default SelectDropdown