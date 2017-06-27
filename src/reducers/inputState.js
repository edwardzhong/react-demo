import * as types from '../constants/inputStateType';

const inputState=(state=true,action)=>{
  if(action.type==types.SET_ENABLE){
    return !state;
  } else {
    return state;
  }
};

export default inputState;