import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('expect to render Card List Component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'Paman',
      username: 'Chuakz',
      email: 'paman.chuakz@gmail.com'
    }
  ];
  expect(shallow(<CardList robots={mockRobots } />)).toMatchSnapshot();
});