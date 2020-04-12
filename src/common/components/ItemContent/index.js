import React from 'react'
import { List, Card } from 'antd';

function ItemContent() {

  const data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
    {
      title: 'Title 5',
    },
    {
      title: 'Title 6',
    },
    {
      title: 'Title 6',
    },
    {
      title: 'Title 6',
    },

  ];

  return (
    <List
      grid={ {
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 3,
        xxl: 2,
      } }
      dataSource={ data }
      renderItem={ item => (
        <List.Item>
          <Card title={ item.title }>Card content</Card>
        </List.Item>
      ) }
    />
  )
}

export default ItemContent