import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Card from './Card';

// const wrapper = shallow(<Card />);
// shallow : render only one of wrapped component on function,
// it means, when those component have other component as child component 
// its not going to shallowing too
// console.log(wrapper);

// Full Test Suite
it('expect to render Card component', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.length).toEqual(1);
});

// mount : will full DOM rendering, its ideal for testing between component
// which is interact each other

// render : used to render react components to static HTML &
// analyze the resulting HTML structure, returned as LoadedCheerio
