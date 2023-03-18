import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {ProductContext} from '../../context/ProductContext';
import {Button} from '../Button';
import {styles} from './styles';

export const ButtonOptions = () => {
  const {toggleDisplay, productState} = useContext(ProductContext);
  const {isRedemption} = productState;
  const handleOnPress = (value: null | boolean) => {
    toggleDisplay(value);
  };

  return (
    <View style={styles.container}>
      {isRedemption !== null && (
        <Button
          testID="allButton"
          onPress={() => handleOnPress(null)}
          style={styles.mainButton}>
          <Text testID="allText" style={styles.textButton}>
            Todos
          </Text>
        </Button>
      )}
      {isRedemption === null && (
        <View style={styles.buttonContainer}>
          <Button
            testID="savedButton"
            onPress={() => handleOnPress(false)}
            style={[styles.rightOption, styles.subButton]}>
            <Text testID="savedText" style={styles.textButton}>
              Ganados
            </Text>
          </Button>
          <Button
            testID="redeemedButton"
            onPress={() => handleOnPress(true)}
            style={[styles.leftOption, styles.subButton]}>
            <Text testID="redeemedText" style={styles.textButton}>
              Canjeados
            </Text>
          </Button>
        </View>
      )}
    </View>
  );
};
