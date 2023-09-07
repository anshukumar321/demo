import {configureStore} from '@reduxjs/toolkit';
import {RootReducer} from './RootReducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, RootReducer);
// const store = configureStore({
//   reducer: persistedReducer,
// });

// export default store;
export const store = configureStore(persistedReducer);
export const persistor = persistStore(store);
