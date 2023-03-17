import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import {Product} from './screens/Product';

const Stack = createNativeStackNavigator<RootParamList>();

const screenOptions = {headerShown: false};

export const Router = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={screenOptions} component={Home} />
        <Stack.Screen
          name="Product"
          options={({route}) => ({title: route.params.product})}
          component={Product}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
