import React from 'react'
import { shallow,mount } from 'enzyme'
import { Home } from '../../src/containers/Home'

const setUp=()=>{
	const props={
		match:{params:{id:'123'}},
		history:{length:12},
		outputTest:jest.fn()
	};

	const wrapper=shallow(<Home {...props} />);
	props.wrapper=wrapper;
	return props;
}


describe('Home container',() => {
	const { wrapper,outputTest }=setUp();

	it('component should render',()=>{
		expect(wrapper.find('h3').exists()).toBe(true);
		expect(wrapper.find('h3').first().text()).toBe('param-id: 123');
	});

	it('should trigger outPutTest on click button',()=>{
		wrapper.find('button').simulate('click');
		expect(outputTest).toHaveBeenCalled();
	});
});
