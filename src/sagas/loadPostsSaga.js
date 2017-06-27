import {call, put, takeEvery,takeLatest} from 'redux-saga/effects';
import * as requestTypes from '../constants/requestType'
import * as commentTypes from '../constants/commentType'

export function fetchPosts() {
  return new Promise((resolve,reject)=>{
    return fetch(`/commentData.json`)
      .then(response => response.json())
      .then(json=>{
        if(json.ret==0){
          resolve(json);
        } else {
          reject(json);
        }
      })
      .catch(err=>{
        reject(err);
      });
  });
}

export default function* loadPosts() {
  try {
    const json = yield call(fetchPosts);
    yield put({type: requestTypes.RECEIVE_POSTS, posts:json});
    yield put({type: commentTypes.ADD_COMMENT, comment:json.list})
  } catch (error) {
    yield put({type: requestTypes.REQUEST_ERROR, err:error})
  }
}