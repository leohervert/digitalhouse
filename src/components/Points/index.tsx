import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {ProductContext} from '../../context/ProductContext';
import AppStyles from '../../styles/AppStyles';
import {styles} from './styles';

export const Points = () => {
  const {productState} = useContext<ProductContextProps>(ProductContext);
  const {points} = productState;
  return (
    <View style={styles.container}>
      <View style={styles.pointsContainer}>
        <Text style={AppStyles.grayTitle}>Tus Puntos</Text>
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.monthText}>Marzo</Text>
        <Text style={styles.pointsText}>
          {new Intl.NumberFormat().format(points)} pts
        </Text>
      </View>
    </View>
  );
};
