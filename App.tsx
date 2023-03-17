import React from 'react';
import {SafeAreaView} from 'react-native';
import {ProductProvider} from './src/context/ProductContext';

function App(): JSX.Element {
  return (
    <ProductProvider>
      <SafeAreaView />
    </ProductProvider>
  );
}

export default App;
