import * as React from 'react';
import ScreenContainer from './src/DemoProject/ScreenContainer';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/ReduxFiles/Store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ScreenContainer />
      </PersistGate>
    </Provider>
  );
}
