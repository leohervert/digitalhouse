import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
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
    <SafeAreaView style={[backgroundStyle, AppStyles.mainContainer]}>
      <ProductProvider>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </ProductProvider>
    </SafeAreaView>
  );
}

export default App;
