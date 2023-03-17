import React, {useReducer} from 'react';
import {createContext} from 'react';
import axios from 'axios';
import {productReducer} from './productReducer';

export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps,
);

const INITIAL_STATE: ProductState = {
  products: [] as ProductModel[],
  displayed: [] as ProductModel[],
  isRedemption: false,
  points: 0,
};

export const ProductProvider = ({children}: ProductProviderProps) => {
  const [productState, dispatch] = useReducer(productReducer, INITIAL_STATE);

  const getProducts = async () => {
    const response = await axios.get<ProductModel[]>(
      'https://6222994f666291106a29f999.mockapi.io/api/v1/products',
    );
    const values = response.data;
    const sum = values.reduce(
      (ac, item) =>
        ac + (!item.is_redemption ? item.points : -Math.abs(item.points)),
      0,
    );
    dispatch({
      type: 'addProducts',
      payload: {products: values, points: sum},
    });
  };

  // const toggleDisplay = (selected: string) => {};

  const value = {
    productState,
    getProducts,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
