import React, {useContext, useEffect} from 'react';
import {ActivityIndicator, View, ScrollView} from 'react-native';
import {ProductContext} from '../../context/ProductContext';
import {Item} from '../Item';
import {styles} from './styles';

export const Items = () => {
  const {productState, getProducts} = useContext(ProductContext);
  const {displayed, loading} = productState;

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {loading && <ActivityIndicator size="large" animating={loading} />}
        {!loading &&
          displayed.length > 0 &&
          displayed.map((item: ProductModel) => (
            <Item key={item.id} {...item} />
          ))}
      </ScrollView>
    </View>
  );
};
