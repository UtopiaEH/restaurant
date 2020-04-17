import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import DetailedItemContent from "../../common/components/DetailedItemConent";
import Navigation from "../../common/components/Navigation";
import { requestPostsCollections, requestSetSearch } from "../../redux/actions";
import { StyledContent } from "./StyledContent";

import ItemContent from "../../common/components/ItemContent";

function PortalContent({ collections, requestSetSearch, searchWord, searchResult }) {

  const { posts } = collections

  useEffect(() => {
    requestSetSearch()
  }, [ requestSetSearch, searchWord ])

  return (
    <>
      <StyledContent>
        <Switch>
          <Route exact path="/">
            <ItemContent posts={ posts } searchWord={ searchWord } searchResult={ searchResult }/>
          </Route>
          <Route exact path="/restaurant:id" render={ (props) => <DetailedItemContent  { ...props } /> }/>
        </Switch>

        <Navigation/>
      </StyledContent>
    </>
  )
}

const mapStateToProps = state => ({
  collections: state.posts,
  searchResult: state.searchGlobal.searchResult,
  searchWord: state.searchGlobal.searchWord,
  isLoading: state.posts.isLoading
})

const mapDispatchToProps = {
  requestPostsCollections,
  requestSetSearch,
}

export default connect(mapStateToProps, mapDispatchToProps)(PortalContent)