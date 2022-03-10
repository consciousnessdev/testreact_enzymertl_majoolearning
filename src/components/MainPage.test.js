import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false,
  }
  wrapper = shallow(<MainPage {...mockProps} />);
});

it('render MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

// testing filterRobots function
it('filters robots correctly 1', () => {
  expect(wrapper.instance().filterRobots([])).toEqual([]);
});

// specific case of filterRobots
it('filters robots correctly 2', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com',
    }],
    searchField: 'john',
    isPending: false,
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />)
  expect(wrapper2.instance().filterRobots()).toEqual([
    {
      id: 3,
      name: 'John',
      email: 'john@gmail.com',
    },
  ]);
});
