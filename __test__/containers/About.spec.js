import React from 'react'
import { shallow,mount } from 'enzyme'
import { About } from '../../src/containers/About'

const setUp=()=>{
	const props={
		inputText:{
			name:'jeff',
			email:'jeff@123.com'
		},
		nameChange:jest.fn(),
		emailChange:jest.fn()
	};

	const wrapper=shallow(<About {...props} />);

	return {
		props,
		wrapper
	};
}

describe('About container',()=>{
	const {props,wrapper}=setUp();
	const {inputText,nameChange,emailChange}=props;
	const nameId='inputName';
	const mailId='inputEmail';
	it('component should render',()=>{
		expect(wrapper.find('#'+nameId).exists()).toBe(true);
		expect(wrapper.find('#'+mailId).exists()).toBe(true);
		expect(wrapper.find('p').first().text()).toBe('name:jeff');
		expect(wrapper.find('p').last().html()).toBe('<p>email:jeff@123.com</p>');
	});

	it('should trigger nameChange',()=>{
		wrapper.find('#'+nameId).simulate('change',{
			target:{
				value:'Alex',
				id:nameId
			}
		});
		expect(nameChange).toHaveBeenCalled();
	});

	it('should trigger emailChange',()=>{
		wrapper.find('#'+mailId).simulate('change',{
			target:{
				id:mailId,
				value:'alex@123.com'
			}
		});
		expect(emailChange).toHaveBeenCalled();
	});
});