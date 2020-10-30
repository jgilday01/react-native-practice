import React from 'react';
import { YellowBox } from 'react-native';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react';
import Loading from './components/LoadingComponent';

YellowBox.ignoreWarnings(["VirtualizedLists should never be nested"]);

const { persistor, store } = ConfigureStore();

export default function App() {
   return (
      <Provider store={store}>
         <PersistGate
            loading={<Loading />}
            persistor={persistor}>
            <Main />
         </PersistGate>
      </Provider>
   );
}
