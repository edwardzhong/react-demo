import reducer from '../../src/reducers/inputText'
import * as types from '../../src/constants/inputTextType'

describe('inputText reducer',()=>{
	const defaultState={name:'jeff',email:'jeff@123.com'};
	it('should be export as function',()=>{
		expect(reducer).toBeInstanceOf(Function);
	});

	it('should provide the initial state',()=>{
		expect(reducer(undefined,{})).toEqual(defaultState);
	});

	it('return change name action',()=>{
		let txt='David';
		expect(reducer(defaultState,{type:types.CHANGE_NAME,txt:txt })).toEqual({
			name:txt,
			email:'jeff@123.com'
		});
	});

	it('return change email action',()=>{
		let txt='123@123.com';
		expect(reducer(defaultState,{type:types.CHANGE_MAIL,txt:txt })).toEqual({
			name:'jeff',
			email:txt
		});
	});
})