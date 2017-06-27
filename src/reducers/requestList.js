import * as types from '../constants/requestType';

const requestList=(state={
  isFetching:false,
  list:[]
},action) => {
  switch(action.type){
    case types.REQUEST_POSTS:
      return Object.assign({},state,{
        isFetching:true
      });
    case types.RECEIVE_POSTS:
      return Object.assign({},state,{
        isFetching:false,
        list:action.posts
      });
    case types.REQUEST_ERROR:
      return Object.assign({},state,{
        isFetching:false,
        list:[],
      });
    default:return state;
  }
};

export default requestList;