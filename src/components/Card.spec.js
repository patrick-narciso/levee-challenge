/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('should render correctly with given props', () => {
    const address = {
      address: "Avenida José Pancetti",
      city: "teste",
      state: "RJ",
      coordinates: {
        latitude: -22.8995957,
        longitude: -47.0971379
      },
    };

    const component = shallow(<Card title="teste" company="teste" address={address}/>);

    expect(component).toMatchSnapshot();
  });
});
