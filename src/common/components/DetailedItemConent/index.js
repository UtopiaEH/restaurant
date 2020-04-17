import React, { useEffect } from 'react'
import { Avatar, Card } from 'antd'
import { connect } from "react-redux";
import CoffeeOutlined from "@ant-design/icons/lib/icons/CoffeeOutlined";

import { requestDetailedPost, setDetailedPostId } from "../../../redux/actions";

import noImage from '../../../assets/images/no-image.png'


function DetailedItemContent({ match, requestDetailedPost, setDetailedPostId, detailedPost }) {

  const { Meta } = Card
  const { id } = match.params
  const { phone_numbers, thumb, name, cuisines } = detailedPost.detailedPost

  useEffect(() => {
    setDetailedPostId(id)
    requestDetailedPost()
  }, [ requestDetailedPost, setDetailedPostId, id ])

  return (
    <Card
      style={ { width: 300 } }
      cover={
        <img
          alt="example"
          src={ thumb ? thumb : noImage }
        />
      }
    >
      <Meta
        avatar={ <Avatar src={ thumb }/> }
        title={ name }
        description={ phone_numbers }
      />
      <br/>
      <p><CoffeeOutlined /> { cuisines }</p>
    </Card>
  )
}

const mapStateToProps = state => ({
  detailedPost: state.detailedPost
})

const mapDispatchToProps = {
  requestDetailedPost,
  setDetailedPostId
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailedItemContent)
