import * as types from '../constants/inputTextType';

const inputText=(state={name:'jeff',email:'jeff@123.com'},action)=>{
	switch(action.type){
		case types.CHANGE_NAME:
			return Object.assign({},state,{name:action.txt});
		case types.CHANGE_MAIL:
			return Object.assign({},state,{email:action.txt});
		default:return state;
	}
};

export default inputText;