import React from 'react'
import { shallow,mount } from 'enzyme'
import { CommentApp } from '../../src/containers/CommentApp'

const setUp=()=>{
	var props={ 
		list:[], 
		inputState:true,
		addComment:jest.fn(),
		removeComments:jest.fn(),
		setEnable:jest.fn(),
		selectComment:jest.fn(),
		removeComment:jest.fn(),
		requestPosts:jest.fn()
	};

	var wrapper =mount(<CommentApp {...props} />);
	return {
		wrapper,
		requestPosts:props.requestPosts
	}
}

describe('CommentApp container',()=>{
	const {wrapper,requestPosts}=setUp();
	it('component should render',()=>{
		expect(wrapper.find('.form').exists()).toBe(true);
		expect(wrapper.find('ul').exists()).toBe(true);
	});

	it('componentDidMount should trigger requestPosts',()=>{
		expect(requestPosts).toHaveBeenCalled();
	});
});
