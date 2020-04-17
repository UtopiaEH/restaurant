import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { requestMealData } from "../../../redux/actions";
import { setDataLocalStorage } from "../../../utils";
import { ORDER_MEAL_LOCAL, PLAN_MEAL } from "../../constants";
import CollectionCreateForm from "../CreateFrom";
import { StyledButtonWindow } from "./StyledWindow";

const ModalWindow = ({ requestMealData }) => {
  const [ visible, setVisible ] = useState(false);

  useEffect(() => {
    requestMealData()
  })


  const onCreate = values => {
    setDataLocalStorage(values, ORDER_MEAL_LOCAL)
    setVisible(false);
  };

  return (
    <div>
      <StyledButtonWindow
        type="primary"
        onClick={ () => {
          setVisible(true);
        } }
      >
        { PLAN_MEAL }
      </StyledButtonWindow>
      <CollectionCreateForm
        visible={ visible }
        onCreate={ onCreate }
        onCancel={ () => {
          setVisible(false);
        } }
      />
    </div>
  );
}

const mapDispatchToProps = {
  requestMealData
}

export default connect(null, mapDispatchToProps)(ModalWindow)