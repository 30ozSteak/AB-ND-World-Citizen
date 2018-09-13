import React from 'react';
import { shallow, mount } from 'enzyme';
import Play from './Play';

describe('Play', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Play />);
  })

  it('should exist', () => {
    
    expect(wrapper).toBeDefined();
  })

    it("should have a default empty state", () => {
    expect(wrapper.state()).toEqual({
      fetchSent: false,
      expanded: false,
      address: "",
      city: "",
      state: "",
      location: []
    });
  });
});
