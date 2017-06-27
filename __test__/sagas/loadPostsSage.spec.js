import {call, put, takeEvery,takeLatest} from 'redux-saga/effects';
import loadPosts ,{fetchPosts} from '../../src/sagas/loadPostsSaga'
import * as types from '../../src/constants/requestType'
import sinon from 'sinon'

describe('loadPostsSaga',()=>{
  const generator = loadPosts();
  it('receive posts',()=>{
    // expect(generator.next().value).toEqual(call(fetchPosts));
    expect(generator.next().value).toEqual(call(fetchPosts));
  });
});
