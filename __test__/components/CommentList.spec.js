import React from 'react'
import CommentList from '../../src/components/CommentList'
import { shallow,mount,render } from 'enzyme'

const setup = () => {
	const list=[{
		"id":13565,
		"name":"Alex",
		"msg":"hello David !",
		"isSelect":false,
		"date":"2017/6/3 12:23:11"
	}];
	return mount(<CommentList list={list} removeComment={jest.fn()} selectComment={jest.fn()} /> )
}

describe('CommentList component', () => {
  const wrapper = setup();
  it('component should render', () => {
    // expect(wrapper.find('li')).toHaveLength(1);
    expect(wrapper.find('li').exists()).toBe(true);
  })
})
