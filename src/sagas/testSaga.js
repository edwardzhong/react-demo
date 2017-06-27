import {delay} from 'redux-saga'
import {call, put, takeEvery,takeLatest} from 'redux-saga/effects';

export default function * test(){
  // return new Promise(function(resolve){
  //   setTimeout(function() {
  //     resolve('test');
  //     console.log('test');
  //   }, 2000);
  // });
  yield call(delay, 2000)
  console.log('test');
  return 'test'; 
}