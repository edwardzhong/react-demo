import * as types from '../constants/commentType'

export function addComment(comment) {
  return {
    type: types.ADD_COMMENT,
    comment
  }
}

export function removeComment(key) {
  return {
    type: types.REMOVE_COMMENT,
    key
  }
}


export function selectComment(key) {
  return {
    type: types.SELECT_COMMENT,
    key
  }
}


export function removeComments() {
  return {
    type: types.REMOVE_COMMENTS
  }
}