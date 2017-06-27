import React from 'react'
import Comment from '../../src/components/Comment'
import { shallow } from 'enzyme'

const setup = (item={
    "id":13565,
    "name":"Alex",
    "msg":"hello David !",
    "isSelect":false,
    "date":"2017/6/3 12:23:11"
  }) => {
  
  const removeComment = jest.fn();
  const selectComment = jest.fn();

  const wrapper = shallow(<Comment item={item} removeComment={removeComment} selectComment={selectComment} /> )

  return {
    wrapper,
    removeComment,
    selectComment
  }
}

describe('Comment component', () => {
  const { wrapper,removeComment, selectComment} = setup();
  it('component should render', () => {
    expect(wrapper.find('h2').exists()).toBe(true);
    // expect(wrapper.find('h2')).toHaveLength(1);
  })

  it('should trigger selectComment event on click',() => {
    wrapper.simulate('click')
    expect(selectComment).toHaveBeenCalled()
  })

  it('should trigger removeComment event on doubleClick',() =>{
    wrapper.simulate('doubleClick')
    expect(removeComment).toHaveBeenCalled()
  })
})