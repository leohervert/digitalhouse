import React, {useContext, useState, useEffect} from 'react';
import {ActivityIndicator, View, ScrollView} from 'react-native';
import {ProductContext} from '../../context/ProductContext';
import {Item} from '../Item';
import {styles} from './styles';

const ItemsComponent = () => {
  const {productState} = useContext(ProductContext);
  const {products, loading, isRedemption} = productState;
  const [state, setState] = useState<ProductModel[]>([]);
  useEffect(() => {
    if (products.length > 0) {
      setState(
        isRedemption === null
          ? products
          : isRedemption === true
          ? products.filter(x => x.is_redemption)
          : products.filter(x => !x.is_redemption),
      );
    }
  }, [products, isRedemption]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {loading && <ActivityIndicator size="large" animating={loading} />}
        {!loading &&
          state.map((item: ProductModel) => <Item key={item.id} {...item} />)}
      </ScrollView>
    </View>
  );
};

export const Items = React.memo(ItemsComponent);
