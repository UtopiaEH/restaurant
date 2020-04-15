import React from 'react'
import { List, Card } from 'antd';

function ItemContent({ posts }) {

  return (
    <List
      grid={ {
        gutter: 16, column: 4,
      } }
      dataSource={ posts }
      renderItem={ collection => {
        const { title, description, image_url } = collection.collection
        return (
            <List.Item>
              <Card title={ title }>
                { description }
                  <img style={{maxWidth: '184px', display: 'flex', margin: '0 auto'}} src={ image_url } alt={ title }/>
              </Card>
            </List.Item>
        )
      } }
    />
  )
}

export default ItemContent
