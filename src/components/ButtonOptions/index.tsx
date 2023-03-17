import React, {useState} from 'react';
import {View} from 'react-native';
import {Button} from '../Button';
import {styles} from './styles';

export const ButtonOptions = () => {
  const [state] = useState(false);

  return (
    <View style={styles.container}>
      {state && (
        <Button style={styles.mainButton} textStyles={styles.textButton}>
          Todos
        </Button>
      )}
      {!state && (
        <View style={styles.buttonContainer}>
          <Button
            style={[styles.rightOption, styles.subButton]}
            textStyles={styles.textButton}>
            Ganados
          </Button>
          <Button
            style={[styles.leftOption, styles.subButton]}
            textStyles={styles.textButton}>
            Canjeados
          </Button>
        </View>
      )}
    </View>
  );
};
