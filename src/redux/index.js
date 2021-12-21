import {persistStore, persistReducer} from 'redux-persist';
import {createStore} from 'redux'
import AsynaStorage from '@react-native-async-storage/async-storage'
import Reducers from './stora';

const persitedReducer = persistReducer({
    key:'root',
    storage:AsynaStorage,
    whitelist:['userReducer'],
}, Reducers);

const store = createStore(persitedReducer);
const persistor = persistStore(store)
export {store, persistor}