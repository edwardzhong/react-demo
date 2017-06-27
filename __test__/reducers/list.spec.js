import reducer from '../../src/reducers/list'
import * as types from '../../src/constants/commentType'

describe('list reducer',()=>{
	let list=[{
		"id":1,
		"name":"Alex",
		"msg":"hello David !",
		"isSelect":false,
		"date":"2017/6/2 12:23:11"
	},{
		"id":2,
		"name":"David",
		"msg":"hello Alex !",
		"isSelect":true,
		"date":"2017/6/3 12:23:11"
	}],
	obj={
		"id":3,
		"name":"Edward",
		"msg":"hello everybody !",
		"isSelect":false,
		"date":"2017/6/4 12:23:11"
	};

	it('should export as function',()=>{
		expect(reducer).toBeInstanceOf(Function);
	});

	it('should return initial state',()=>{
		expect(reducer(undefined,{})).toEqual([]);
	});

	it('addComment action by array',()=>{
		expect(reducer([],{type:types.ADD_COMMENT,comment:list})).toHaveLength(2);
	});

	it('addComment action by object',()=>{
		expect(reducer([],{type:types.ADD_COMMENT,comment:obj})[0]).toEqual(obj);
	});

	it('removeComment action by id',()=>{
		expect(reducer(list,{type:types.REMOVE_COMMENT,key:2})).toHaveLength(1);
	});

	it('selectComment action by id',()=>{
		expect(reducer(list,{type:types.SELECT_COMMENT,key:2})[1].isSelect).toBe(false);
		expect(reducer(list,{type:types.SELECT_COMMENT,key:2})[1].isSelect).toBe(true);
	});

	it('remove the comment where the isSelect is true',()=>{
		expect(reducer(list,{type:types.REMOVE_COMMENTS})).toHaveLength(1);
	})
});
