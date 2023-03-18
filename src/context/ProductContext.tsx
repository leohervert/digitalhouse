import React, {useReducer, useEffect} from 'react';
import {createContext} from 'react';
import axios from 'axios';
import {productReducer} from './productReducer';

export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps,
);

const INITIAL_STATE: ProductState = {
  products: [] as ProductModel[],
  displayed: [] as ProductModel[],
  isRedemption: null,
  points: 0,
  loading: false,
};

export const ProductProvider = ({children}: ProductProviderProps) => {
  const [productState, dispatch] = useReducer(productReducer, INITIAL_STATE);

  useEffect(() => {
    getProducts().then(values => {
      sumProducts(values);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sumProducts = (products: ProductModel[]) => {
    const sum = products.reduce(
      (ac, item) =>
        ac + (!item.is_redemption ? item.points : -Math.abs(item.points)),
      0,
    );
    dispatch({type: 'countPoints', payload: sum});
  };

  const getProducts = async () => {
    toggleLoading();
    const response = await axios.get<ProductModel[]>(
      'https://6222994f666291106a29f999.mockapi.io/api/v1/products',
    );
    const values = response.data;
    dispatch({
      type: 'addProducts',
      payload: values,
    });
    return values;
  };

  const toggleDisplay = (selected: null | boolean) => {
    toggleLoading();
    dispatch({
      type: 'toggleRedemption',
      payload: selected,
    });
  };

  const toggleLoading = () => {
    dispatch({
      type: 'toggleLoading',
      payload: !productState.loading,
    });
  };

  const value = {
    productState,
    getProducts,
    toggleDisplay,
    toggleLoading,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
