import React, {useContext, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {ProductContext} from '../../context/ProductContext';
import {Item} from '../Item';
import {styles} from './styles';

export const Items = () => {
  const {productState, getProducts} = useContext(ProductContext);
  const {products} = productState;

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {products.length > 0 &&
          products.map((item: ProductModel) => (
            <Item key={item.id} {...item} />
          ))}
      </ScrollView>
    </View>
  );
};
