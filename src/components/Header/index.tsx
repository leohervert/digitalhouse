import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
export const Header = () => {
  return (
    <View>
      <Text style={styles.textBold}>Bienvenido de vuelta!</Text>
      <Text style={styles.text}>Ruben Rodriguez</Text>
    </View>
  );
};
