import reducer from '../../src/reducers/inputState'
import * as types from '../../src/constants/inputStateType'

describe('inputState reducer',()=>{
	it('should be export as function',()=>{
		expect(reducer).toBeInstanceOf(Function);
	});

	it('should provide the initial state',()=>{
		expect(reducer(undefined,{})).toBe(true);
	});

	it('should return false when state is true',()=>{
		expect(reducer(true,{type:types.SET_ENABLE })).toBe(false);
	});

	it('should return true when state is false',()=>{
		expect(reducer(false,{type:types.SET_ENABLE })).toBe(true);
	});
})
