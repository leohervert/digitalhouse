import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ProductProvider} from './src/context/ProductContext';
import {Router} from './src/Router';
import AppStyles from './src/styles/AppStyles';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <ProductProvider>
      <SafeAreaView style={[backgroundStyle, AppStyles.mainContainer]}>
        <Router />
      </SafeAreaView>
    </ProductProvider>
  );
}

export default App;
