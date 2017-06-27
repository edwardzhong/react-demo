import * as types from '../constants/commentType'

const list = (state=[], action) => {
  switch (action.type) {
    case types.ADD_COMMENT: 
      if(Array.isArray(action.comment)){
        return [...state,...action.comment];
      } else {
        return [...state,action.comment];
      }
    case types.REMOVE_COMMENT:
      return state.filter(item=>item.id!=action.key);
    case types.SELECT_COMMENT:
      for(let [i,obj] of state.entries()){
        if(action.key==obj.id) obj.isSelect=!obj.isSelect;
      }
      return [...state];
    case types.REMOVE_COMMENTS:
      return state.filter(item=>!item.isSelect);
    default: return state;
  }
};

export default list;