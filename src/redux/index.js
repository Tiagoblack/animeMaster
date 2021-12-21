import {persistStore, persistReducer} from 'redux-persist';
import {createStore} from 'redux'
import AsynaStorage from '@react-native-async-storage/async-storage'
import Reducer from './stora';

const persitedReducer =persistReducer({
    key:'root',
    storage:AsynaStorage,
    whitelist:['userReducer'],
}, Reducer);

const store = createStore(persistReducer);
const persistor = persistReducer(store)


export {store, persistor}