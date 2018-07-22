import React from 'react';
import { Text, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { assoc } from 'ramda';

import { AppNavigator } from './modules/Navigation/Navigation.container';
import createStore from './redux/createStore';
import withAssetsLoading from './hoc/withAssetsLoading/withAssetsLoading.hoc';

const { store } = createStore();
Text.defaultProps.allowFontScaling = false;
ScrollView.defaultProps = assoc('keyboardShouldPersistTaps', 'always', ScrollView.defaultProps);

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

console.disableYellowBox = true

export default withAssetsLoading(App);
