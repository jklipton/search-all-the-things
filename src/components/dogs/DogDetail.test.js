import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import DogDetail from './DogDetail';

describe('DogDetail', () => {

  it('renders as designed', () => {
    const wrapper = shallow(<DogDetail dogID={null} history={null}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders with id as designed', () => {
    const wrapper = shallow(<DogDetail dogID={'41724600'} history={null}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});
