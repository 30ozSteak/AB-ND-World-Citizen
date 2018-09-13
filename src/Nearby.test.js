import React from 'react';
import { shallow, mount } from 'enzyme';
import Nearby from './Nearby';

describe('Nearby', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Nearby />);
  })

  it('should exist', () => {

    expect(wrapper).toBeDefined();
  })
});
