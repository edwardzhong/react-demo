import {call, put, takeEvery,takeLatest} from 'redux-saga/effects';
import * as types from '../constants/requestType'
import loadPosts from './loadPostsSaga'
import test from './testSaga'

function* loadSagas() {
    yield takeEvery(types.REQUEST_POSTS,loadPosts);
    yield takeEvery('TEST',test);
}

export default loadSagas