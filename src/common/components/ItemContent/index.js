import React from 'react'
import { Link } from 'react-router-dom'
import { List, Card } from 'antd';
import noImage from '../../../assets/images/no-image.png'

function ItemContent({ searchResult }) {
  const { Meta } = Card;

  return (
    <>
      <List
        grid={ {
          gutter: 16, column: 4,
        } }
        dataSource={ searchResult }
        renderItem={ ({ restaurant: { name, thumb, cuisines, id } }) => {
          return (
            <List.Item>
              <Link to={ `/restaurant:${ id }` }>
                <Card
                  hoverable
                  style={ { width: 240 } }
                  cover={ <img alt="example" src={ thumb ? thumb : noImage }/> }
                >
                  <Meta title={ name } description={ cuisines }/>
                </Card>
              </Link>
            </List.Item>
          )
        } }
      />
    </>
  )
}

export default ItemContent
