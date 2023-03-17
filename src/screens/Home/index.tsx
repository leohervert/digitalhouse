import React from 'react';
import {View} from 'react-native';
import {Movements} from '../../components/Movements';
import {Points} from '../../components/Points';
import {Header} from '../../components/Header';
import {styles} from './styles';
import {ButtonOptions} from '../../components/ButtonOptions';

const Home = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <Points />
      <Movements />
      <ButtonOptions />
    </View>
  );
};

export default Home;
