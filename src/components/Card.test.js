import React from 'react';
import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json';
import Card from './Card';

// snapshot test: is test by compare before after component from snapshot
it('expect to render Card component', () => {
    // const wrapper = shallow(<Card />);
    // expect(toJson(wrapper)).toMatchSnapshot();
    
    // if no snap file it will saved,
    // then if something has change and different with saved snap
    // it will show error

    // if want update to latest tested, pres u
    expect(shallow(<Card />)).toMatchSnapshot();
});
