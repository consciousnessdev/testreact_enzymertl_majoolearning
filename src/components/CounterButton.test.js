import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('expect to render CounterButton component & Passing props', () => {
  const mockColor = 'red';
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('correctly increments the counter', () => {
  const mockColor = 'red';
  // declare wrapper of shallowed component
  const wrapper = shallow(<CounterButton color={mockColor} />);
  // find just like Query Selector
  wrapper
    .find('[id="counter"]')
    // simulate is trigger event
    .simulate('click');
  // before count is 0, after simulate click it must equal = 1
  wrapper.find('[id="counter"]').simulate('click');
  // previous count is 1, after simulate click it must equal = 2
  expect(wrapper.state()).toEqual({
    count: 2,
  });
  wrapper.find('[id="counter"]').simulate('click');
  // previous count is 2, after simulate click it must equal = 3
  expect(wrapper.state()).toEqual({
    count: 3,
  });
  // try simulate keypress of button
  wrapper.find('[id="counter"]').simulate('keypress');
  expect(wrapper.state()).toEqual({
    count: 3,
  });

  // expect props value is red
  expect(wrapper.props().color).toEqual('red');
});
