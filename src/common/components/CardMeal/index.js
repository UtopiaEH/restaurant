import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";
import React from 'react'
import { Card } from 'antd';
import { connect } from "react-redux";
import { removeMealItem } from "../../../redux/actions";
import { removeDataLocalStorage } from "../../../utils";
import { MY_ORDER, ORDER_MEAL_LOCAL } from "../../constants";

function CardMeal({ planMeal, removeMealItem }) {

  const handleRemove = (index) => {
    removeDataLocalStorage(ORDER_MEAL_LOCAL, index)
    removeMealItem(index)
  }

  return (
    <div className="site-card-border-less-wrapper">
      <Card title={ MY_ORDER } bordered={ false }>
        { (planMeal.length === 0)
          ? <p>Order is empty!</p>
          : planMeal.map(({ select, description, orderDate }, index) => {

              const date = new Date(orderDate);
              const month = +date.getMonth()
              return (
                <p key={ index }>
                  Date: { date.getDay() + '/' + (month + 1) + ' H: ' + date.getHours() + ':' + date.getMinutes() }
                  <br/>
                  Type: { select }
                  <br/>
                  Desc: { description }
                  <br/>
                  <DeleteOutlined
                    style={ {
                      display: 'flex',
                      justifyContent: 'center',
                      border: '1px solid rgba(226,226,226,0.4)',
                      padding: '2px',
                      backgroundColor: 'rgba(127,127,127,0.4)',
                      fontSize: 22,
                      color: '#cc0000'
                    } }
                    onClick={ () => handleRemove(index) }/>
                </p>
              )
            }
          ) }
      </Card>
    </div>
  )
}

const mapStateToProps = state => ({
  planMeal: state.planMeal.planMeals
})

const mapDispatchToProps = {
  removeMealItem
}

export default connect(mapStateToProps, mapDispatchToProps)(CardMeal)