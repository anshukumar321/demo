import {
  applyMiddleware,
  configureStore,
  // getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux'; // Import useDispatch from 'react-redux'
import {rootReducer} from './RootReducer';
// import headerReducer from './reducers/header';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer', 'headerReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

});

export {store};
export const persistor = persistStore(store);
export const useAppDispatch = () => useDispatch();
