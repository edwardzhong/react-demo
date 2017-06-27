import * as types from '../constants/requestType'

export function requestPosts() {
  return {
    type: types.REQUEST_POSTS
  }
}

export function receivePosts(json) {
  return {
    type: types.RECEIVE_POSTS,
    posts: json.list
  }
}

export function requestError(err){
  return {
    type:types.REQUEST_ERROR,
    err,
    posts: []
  }
}