import React from 'react'
import CommentForm from '../../src/components/CommentForm'
import { shallow,mount,render } from 'enzyme'
import {jsdom} from 'jsdom'
import $ from 'jquery'
// import { createRenderer } from 'react-test-renderer/shallow';

global.document = jsdom('<!doctype html><html><body></body></html>')
// global.window = document.defaultView
// global.navigator = global.window.navigator

const setup = () => {
  const props={
  	inputState:true,
  	addComment:jest.fn(),
  	removeComments:jest.fn(),
  	setEnable:jest.fn()
  };

  const wrapper = mount(<CommentForm {...props} /> );
  // const renderer = createRenderer()
  // renderer.render(<CommentForm {...props} />)
  // const wrapper = renderer.getRenderOutput()
  
  return {
    wrapper,
    props
  }
}

describe('CommentForm component', () => {
  const { wrapper, props } = setup();
  const { addComment, removeComments,setEnable } = props;

  it('component should render', () => {
    expect(wrapper.find('.name').exists()).toBe(true);
  })

  it('should trigger isEnable on click checkbox',() => {
    wrapper.find('#isEnable').simulate('change')
    expect(setEnable).toHaveBeenCalled();
  })

  it('should trigger addComment on click first button',() =>{
    wrapper.find('.btn').first().simulate('click')
    expect(addComment).toHaveBeenCalled();
  })

  it('should trigger addComment on keyCode==13 keypress ',() => {
  	$(global.document).trigger('keypress',{keyCode:13});
    expect(addComment).toHaveBeenCalled();
  })

  it('should trigger removeComments on click last button',() =>{
    wrapper.find('.btn').last().simulate('click')
    expect(removeComments).toHaveBeenCalled();
  })
})