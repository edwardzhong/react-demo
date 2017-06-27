import reducer from '../../src/reducers/requestList'
import * as types from '../../src/constants/requestType'

describe('requestList reducer',()=>{
	let initState={ isFetching:false,list:[] };
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
	}];

	it('should export as function',()=>{
		expect(reducer).toBeInstanceOf(Function);
	});

	it('should return initial state',()=>{
		expect(reducer(undefined,{})).toEqual(initState);
	});

	it('isFetching sould be true when request post',()=>{
		expect(reducer(initState,{type:types.REQUEST_POSTS})).toEqual({
			isFetching:true,
			list:[]
		});
	});

	it('should return data when receive post',()=>{
		let receiveAction=reducer(initState,{
			type:types.RECEIVE_POSTS,
			posts:list
		});
		expect(receiveAction.isFetching).toBe(false);
		expect(receiveAction.list).toHaveLength(2);
	});

	it('should renturn empty list when receive error',()=>{
		expect(reducer(initState,{type:types.REQUEST_ERROR})).toEqual({
			isFetching:false,
			list:[]
		});
	});
});