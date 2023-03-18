import React from 'react';
import {Product} from '../../src/screens/Product';
import {render, screen} from '@testing-library/react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {ProductMock} from '../../__mocks__/ProductMock';

describe('Product Component Render', () => {
  let mockNavigation: NativeStackScreenProps<RootParamList, 'Product'> = {
    navigation: {
      navigate: jest.fn(),
    },
    route: {
      params: ProductMock,
    },
  };

  test('Test product render', async () => {
    const component = (
      <NavigationContainer>
        <Product {...mockNavigation} />
      </NavigationContainer>
    );
    render(component);
    const productName = await screen.findByText('Detalles del producto:');
    const productPoints = await screen.findByText('16434 puntos');
    expect(productName).toBeOnTheScreen();
    expect(productPoints).toBeOnTheScreen();
  });
});
