import {format} from 'date-fns';
import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export const DetailProduct = ({
  points,
  is_redemption,
  createdAt,
}: ProductModel) => {
  return (
    <View style={styles.container}>
      <Text style={styles.detailTitle}>Detalles del producto: </Text>
      <Text style={[styles.detailText, styles.dateText]}>
        Comprando el {format(new Date(createdAt), 'dd/MM/yyyy')}
      </Text>
      {is_redemption ? (
        <Text style={styles.detailTitle}>Con esta compra usaste: </Text>
      ) : (
        <Text style={styles.detailTitle}>Con esta compra acumulaste: </Text>
      )}
      <Text style={[styles.detailText, styles.pointsText]}>
        {points} puntos
      </Text>
    </View>
  );
};
