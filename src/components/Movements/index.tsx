import React from 'react';
import {View, Text} from 'react-native';
import {Items} from '../Items';
import AppStyles from '../../styles/AppStyles';
import {styles} from './styles';

export const Movements = () => {
  return (
    <View style={styles.container}>
      <Text style={AppStyles.grayTitle}>Tus Movimientos</Text>
      <Items />
    </View>
  );
};
