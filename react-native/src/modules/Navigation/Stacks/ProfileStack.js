import { createStackNavigator } from 'react-navigation';

import ProfileScreen from '../../Profile/ProfileScreen';

const HomeStack = createStackNavigator({
  Profile: ProfileScreen,
});

export default HomeStack;
