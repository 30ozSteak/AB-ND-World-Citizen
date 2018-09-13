import React from 'react';
import { shallow, mount } from 'enzyme';
import NearbyCard from './NearbyCard';

describe('NearbyCard', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NearbyCard />);
  })

  it('should exist', () => {

    expect(wrapper).toBeDefined();
  })

  it('should be able to expand a card', () => {
    wrapper = mount(<NearbyCard />);

    wrapper.simulate('click');

    expect(wrapper.state().expanded).toEqual(true)
  })
});
