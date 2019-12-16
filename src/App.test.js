import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Test Timeline', () => {
  it('App renders without crashing', () => {
    shallow(<App />);
  });
})