import { combineReducers } from 'redux'
import list from './list'
import inputState from './inputState'
import requestList from './requestList'
import inputText from './inputText'

// import { fromJS } from 'immutable';

const rootReducer = combineReducers({
  list,
  inputState,
  requestList,
  inputText
});

export default rootReducer