import React from 'react';
import { shallow, mount } from 'enzyme';
import Achievement from './Achievement';

describe('Achievement', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Achievement />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  }); 

  // it('initially should have a state of toDonts set to an empty array', () => {
  //   expect(wrapper.state().toDonts).toEqual(expect.arrayContaining([]));
  // })

  // it('should retrieve data from local storage on mount', () => {
  //   const toDonts = [
  //     { title: 'title', body: 'body', id: 1 },
  //     { title: 'title', body: 'body', id: 2 }
  //   ]

  //   localStorage.setItem('toDonts', JSON.stringify(toDonts))

  //   wrapper = mount(<Achievement />)
  //   expect(wrapper.state().toDonts).toEqual(toDonts)
  // })

  // it('should be able to add a toDont to state', () => {
  //   const toDonts = [
  //     { title: 'title1', body: 'body1', id: 1 },
  //     { title: 'title2', body: 'body2', id: 2 }
  //   ]

  //   wrapper.setState({ toDonts })

  //   expect(wrapper.state().toDonts.length).toEqual(2)

  //   const newToDont = { title: 'title3', body: 'body3', id: 3 }

  //   wrapper.instance().addToDont(newToDont)

  //   const itemsInStorage = JSON.parse(localStorage.getItem('toDonts')).length

  //   expect(wrapper.state().toDonts.length).toEqual(3)
  //   expect(wrapper.state().toDonts[0]).toEqual(newToDont)
  //   expect(itemsInStorage).toEqual(3)
  // })

  // it('should update local storage', () => {
  //   const toDonts = [
  //     { title: 'title1', body: 'body1', id: 1 },
  //     { title: 'title2', body: 'body2', id: 2 }
  //   ]

  //   wrapper.setState({ toDonts })

  //   wrapper.instance().updateLocalStorage()

  //   const itemsInStorage = JSON.parse(localStorage.getItem('toDonts')).length

  //   expect(itemsInStorage).toEqual(2)
  // })

  // it('should be able to delete a card', () => {
  //   const card1 = { title: 'title1', body: 'body1', id: 1 }
  //   const card2 = { title: 'title2', body: 'body2', id: 2 }

  //   const toDonts = [
  //     card1,
  //     card2
  //   ]

  //   wrapper.setState({ toDonts })

  //   wrapper.instance().deleteCard(card1)

  //   expect(wrapper.state().toDonts[0]).toEqual(card2)
  // })
})