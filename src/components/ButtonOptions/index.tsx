import React, {useContext} from 'react';
import {View} from 'react-native';
import {ProductContext} from '../../context/ProductContext';
import {Button} from '../Button';
import {styles} from './styles';

export const ButtonOptions = () => {
  const {toggleDisplay, productState} = useContext(ProductContext);
  const {isRedemption} = productState;
  const handleOnPress = (value: 'all' | 'redeemed' | 'saved') => {
    toggleDisplay(value);
  };

  return (
    <View style={styles.container}>
      {isRedemption !== 'all' && (
        <Button
          onPress={() => handleOnPress('all')}
          style={styles.mainButton}
          textStyles={styles.textButton}>
          Todos
        </Button>
      )}
      {isRedemption === 'all' && (
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => handleOnPress('saved')}
            style={[styles.rightOption, styles.subButton]}
            textStyles={styles.textButton}>
            Ganados
          </Button>
          <Button
            onPress={() => handleOnPress('redeemed')}
            style={[styles.leftOption, styles.subButton]}
            textStyles={styles.textButton}>
            Canjeados
          </Button>
        </View>
      )}
    </View>
  );
};
