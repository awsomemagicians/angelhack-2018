import { createStackNavigator } from 'react-navigation';

import MainScreen from '../../Main/MainScreen';

const HomeStack = createStackNavigator({
  Home1: MainScreen,
  Home2: MainScreen,
});

export default HomeStack;
