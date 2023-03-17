import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {format} from 'date-fns';
import {useNavigation} from '@react-navigation/native';

type Props = ProductModel;

export const Item = ({
  product,
  createdAt,
  image,
  points,
  is_redemption,
}: Props): JSX.Element => {
  const currentDate = new Date(createdAt);
  const navigation = useNavigation();
  const handleChangeScreen = () => {
    navigation.navigate('Product', {
      product: product,
      createdAt: createdAt,
      image: image,
      points: points,
      is_redemption: is_redemption,
    });
  };
  return (
    <TouchableOpacity onPress={handleChangeScreen} style={styles.touchable}>
      <View style={styles.container}>
        <Image style={styles.tinyImage} source={{uri: image}} />
        <View style={styles.titleContainer}>
          <Text style={styles.nameText}>{product}</Text>
          <Text style={styles.dateText}>
            {format(currentDate, 'dd/MM/yyyy')}
          </Text>
        </View>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>
            <Text style={is_redemption ? styles.redColor : styles.greenColor}>
              {is_redemption ? '-' : '+'}
            </Text>
            {points} {' >'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
