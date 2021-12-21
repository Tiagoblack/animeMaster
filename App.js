import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux'

import { store, persistor } from './src/redux';

export default ()=>(

  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>

        </NavigationContainer>  
      </PersistGate>
  </Provider>
);