import React from 'react'
import { DatePicker } from 'antd';
import { PLAN_MEAL } from "../../constants";

function DatePickerTime() {

  const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }

  const onOk = (value) => {
    console.log('onOk: ', value);
  }

  return (
    <DatePicker
      showTime
      placeholder={ PLAN_MEAL }
      onChange={ onChange }
      onOk={ onOk }
    />
  )
}

export default DatePickerTime
