import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestPostsCollections } from "../../redux/actions";
import { StyledContent } from "./StyledContent";

import ItemContent from "../../common/components/ItemContent";

function PortalContent({ collections, requestPostsCollections }) {

  const { posts } = collections

  useEffect(() => {
    requestPostsCollections()
  }, [ requestPostsCollections ])

  return (
    <StyledContent>
      <ItemContent posts={ posts }/>
    </StyledContent>
  )
}

const mapStateToProps = state => ({
  collections: state.posts
})

const mapDispatchToProps = {
  requestPostsCollections
}

export default connect(mapStateToProps, mapDispatchToProps)(PortalContent)