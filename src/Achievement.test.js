import React from 'react';
import { shallow, mount } from 'enzyme';
import Achievement from './Achievement';

describe('Achievement', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Achievement
      // stamp="Stamp Test"
      // trophyIcon="Icon Test"
      // style="Style Test"
    />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  }); 

  it('initially should have a state of expanded to be false', () => {
    expect(wrapper.state().expanded).toEqual(false);
  })

  it('initially should have a state of count to be 0', () => {
    expect(wrapper.state().count).toEqual(0);
  })

  it('should be able to increment count on click', () => {
    wrapper = mount(<Achievement />);

    wrapper.find('.achievement-slider-box').simulate('click');

    expect(wrapper.state().count).toEqual(1)  
  })

  it('should be able to expand a card', () => {
    wrapper = mount(<Achievement />);

    wrapper.find('.achievement-header').simulate('click');

    expect(wrapper.state().expanded).toEqual(true)
  })
  
  it('should ', () => {
    
  })
})