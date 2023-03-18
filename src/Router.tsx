import 'react-native-gesture-handler';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import {Product} from './screens/Product';

const {Screen, Navigator} = createNativeStackNavigator<RootParamList>();

const screenOptions = {headerShown: false};

export const Router = (): JSX.Element => {
  return (
    <Navigator>
      <Screen name="Home" options={screenOptions} component={Home} />
      <Screen
        name="Product"
        options={({route}) => ({title: route.params.product})}
        component={Product}
      />
    </Navigator>
  );
};
