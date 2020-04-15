import React, { useState } from 'react'
import { Modal } from 'antd';
import { PLAN_MEAL } from "../../constants";
import DatePickerTime from "../DatePickerTime";
import SelectDropdown from "../SelectDropdown";
import { StyledButtonWindow } from "./StyledWindow";

function ModalWindow() {


  const [ visible, setVisible ] = useState(false)
  const [ confirmLoading, setConfirmLoading ] = useState(false)

  const showModal = () => {
    setVisible(true)
  };

  const handleOk = () => {
    setConfirmLoading(true)

    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false)
  };

  return (
    <div>
      <StyledButtonWindow className='modalWindow' type="primary" onClick={ showModal }>
        { PLAN_MEAL }
      </StyledButtonWindow>
      <Modal
        title="Title"
        visible={ visible }
        onOk={ handleOk }
        confirmLoading={ confirmLoading }
        onCancel={ handleCancel }
      >
      <SelectDropdown />
      <DatePickerTime />
      </Modal>
    </div>
  )
}

export default ModalWindow