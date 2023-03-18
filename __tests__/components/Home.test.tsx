import React from 'react';
import Home from '../../src/screens/Home';
import ShallowRenderer from 'react-test-renderer/shallow';
import {MockProductValues} from '../../__mocks__/ProductProviderMock';

describe('Home Component', () => {
  let realUseContext: any;
  let useContextMock: any;

  beforeEach(() => {
    realUseContext = React.useContext;
    useContextMock = React.useContext = jest.fn();
  });

  afterEach(() => {
    React.useContext = realUseContext;
  });

  test('mock hook', async () => {
    useContextMock.mockReturnValue(MockProductValues);
    const component = ShallowRenderer.createRenderer().render(<Home />);

    console.log(component);
  });
});
