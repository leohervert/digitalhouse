import {createContext} from 'react';
import {MockInitialState} from './InitialStateMock';

export const MockProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps,
);
export const MockProductValues: ProductContextProps = {
  productState: MockInitialState,
  getProducts: jest.fn(),
  toggleDisplay: jest.fn(),
  toggleLoading: jest.fn(),
};
