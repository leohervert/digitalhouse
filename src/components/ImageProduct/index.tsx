import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';

type Props = {
  image: string;
};
export const ImageProduct = ({image}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
    </View>
  );
};
