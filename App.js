import 'react-native-gesture-handler'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux'


import { store, persistor } from './src/redux';
import MainStack  from './src/navigator/MainStack';
export default ()=>(

  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack/>
        </NavigationContainer>  
      </PersistGate>
  </Provider>
);