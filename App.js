import React from 'react';
import { YellowBox } from 'react-native';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

YellowBox.ignoreWarnings(["VirtualizedLists should never be nested"]);

const store = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
