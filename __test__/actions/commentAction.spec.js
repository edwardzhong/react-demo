import * as actions from '../../src/actions/CommentAction'
import * as types from '../../src/constants/commentType'

describe('CommentAction', () => {
	it('should be exported as function',()=>{
		expect(actions.addComment).toBeInstanceOf(Function);
		expect(actions.removeComment).toBeInstanceOf(Function);
		expect(actions.selectComment).toBeInstanceOf(Function);
		expect(actions.removeComments).toBeInstanceOf(Function);
	})

	it('should has property',()=>{
		const comment=actions.addComment({
			"id":13565,
			"name":"Alex",
			"msg":"hello David !",
			"isSelect":false,
			"date":"2017/6/3 12:23:11"
		});
		expect(comment).toHaveProperty('comment');

		const remove=actions.removeComment(12);
		expect(remove).toHaveProperty('key');

		const select=actions.selectComment(13);
		expect(select).toHaveProperty('key');
	})

	it('should return an action',()=>{
		expect(actions.removeComments()).toEqual({
			type:types.REMOVE_COMMENTS
		});
	})
})