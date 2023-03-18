import React from 'react';
import {View, Text} from 'react-native';
import {ImageProduct} from '../../components/ImageProduct';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles} from './styles';
import {DetailProduct} from '../../components/DetailProduct';
import {Button} from '../../components/Button';
type Props = NativeStackScreenProps<RootParamList, 'Product'>;

export const Product = ({route, navigation}: Props): JSX.Element => {
  const product = route.params;
  const handleOnPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <ImageProduct image={product.image} />
      <DetailProduct {...product} />
      <View>
        <Button onPress={() => handleOnPress()} style={styles.mainButton}>
          <Text style={styles.textButton}>Aceptar</Text>
        </Button>
      </View>
    </View>
  );
};
