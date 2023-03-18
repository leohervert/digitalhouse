import React from 'react';
import {create} from 'react-test-renderer';
import {Header} from '../../src/components/Header';

const tree = create(<Header />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});
