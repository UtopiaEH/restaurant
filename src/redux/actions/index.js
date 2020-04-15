import { FETCH_POSTS, REQUEST_FETCH_POSTS } from "../types";

export function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS,
    payload: { posts }
  }
}

export const requestPostsCollections = () => ({
  type: REQUEST_FETCH_POSTS,
})